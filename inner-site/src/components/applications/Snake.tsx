import React, { useEffect, useRef, useState } from 'react';
import Window from '../os/Window';
import nokiaLogo from '../../assets/images/nokia-logo.png';

export interface SnakeAppProps extends WindowAppProps {}

const SnakeApp: React.FC<SnakeAppProps> = (props) => {
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(600);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nokiaLogoImgRef = useRef<HTMLImageElement | null>(null);
    const gameStateRef = useRef({
        snake: [{ x: 10, y: 10 }],
        food: { x: 15, y: 15 },
        direction: { x: 1, y: 0 },
        nextDirection: { x: 1, y: 0 },
        gameOver: false,
        score: 0,
        paused: false,
    });
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Load Nokia logo image
        const logoImg = new Image();
        logoImg.src = nokiaLogo;
        nokiaLogoImgRef.current = logoImg;

        // Nokia 3310 style colors
        const NOKIA_BG = '#9bc700';      // Iconic Nokia green background
        const NOKIA_PIXEL = '#0a0a0a';   // Dark pixels (snake, food, borders)
        const NOKIA_BORDER = '#7a9b00';  // Darker green for outer border

        const pixelSize = 10;
        const gridWidth = 20;
        const gridHeight = 25;
        const borderWidth = 20;
        const scoreHeight = 40;

        // Create audio context for sound effects
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        const playEatSound = () => {
            const audioContext = audioContextRef.current;
            if (!audioContext) return;

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'square';

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        };

        const drawGame = () => {
            const state = gameStateRef.current;

            // Fill background with Nokia green
            ctx.fillStyle = NOKIA_BG;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw outer border
            ctx.fillStyle = NOKIA_BORDER;
            ctx.fillRect(0, 0, canvas.width, borderWidth);
            ctx.fillRect(0, 0, borderWidth, canvas.height);
            ctx.fillRect(canvas.width - borderWidth, 0, borderWidth, canvas.height);
            ctx.fillRect(0, canvas.height - borderWidth, canvas.width, borderWidth);

            // Draw score area border
            const scoreAreaY = borderWidth + scoreHeight;
            ctx.fillStyle = NOKIA_PIXEL;
            ctx.fillRect(borderWidth, scoreAreaY - 3, canvas.width - borderWidth * 2, 3);

            // Draw score using pixelated font style
            ctx.fillStyle = NOKIA_PIXEL;
            ctx.font = 'bold 24px "Courier New", monospace';
            ctx.textAlign = 'left';

            // Score on left
            const scoreText = String(state.score).padStart(4, '0');
            ctx.fillText(scoreText, borderWidth + 10, borderWidth + 28);

            // High score on right (for now, same as score)
            ctx.textAlign = 'right';
            ctx.fillText(String(state.score).padStart(2, '0'), canvas.width - borderWidth - 10, borderWidth + 28);

            // Game area - centered
            const gameX = (canvas.width - gridWidth * pixelSize) / 2;
            const gameY = scoreAreaY + 15;

            // Draw game border
            ctx.strokeStyle = NOKIA_PIXEL;
            ctx.lineWidth = 3;
            ctx.strokeRect(gameX, gameY, gridWidth * pixelSize, gridHeight * pixelSize);

            // Draw snake - simple solid squares
            state.snake.forEach((segment) => {
                ctx.fillStyle = NOKIA_PIXEL;
                ctx.fillRect(
                    gameX + segment.x * pixelSize,
                    gameY + segment.y * pixelSize,
                    pixelSize,
                    pixelSize
                );
            });

            // Draw food - simple solid square
            ctx.fillStyle = NOKIA_PIXEL;
            ctx.fillRect(
                gameX + state.food.x * pixelSize,
                gameY + state.food.y * pixelSize,
                pixelSize,
                pixelSize
            );

            if (state.gameOver) {
                // Draw semi-transparent overlay
                ctx.fillStyle = 'rgba(155, 199, 0, 0.9)';
                ctx.fillRect(gameX, gameY, gridWidth * pixelSize, gridHeight * pixelSize);

                // Game over text
                ctx.fillStyle = NOKIA_PIXEL;
                ctx.font = 'bold 20px "Courier New", monospace';
                ctx.textAlign = 'center';
                const centerX = gameX + (gridWidth * pixelSize) / 2;
                const centerY = gameY + (gridHeight * pixelSize) / 2;

                ctx.fillText('GAME OVER', centerX, centerY - 30);

                ctx.font = 'bold 16px "Courier New", monospace';
                ctx.fillText(`Score: ${state.score}`, centerX, centerY + 10);

                ctx.font = 'bold 12px "Courier New", monospace';
                ctx.fillText('Press SPACE', centerX, centerY + 40);
                ctx.fillText('to restart', centerX, centerY + 55);
                ctx.textAlign = 'left';
            } else if (state.paused) {
                ctx.fillStyle = 'rgba(155, 199, 0, 0.9)';
                ctx.fillRect(gameX, gameY, gridWidth * pixelSize, gridHeight * pixelSize);

                ctx.fillStyle = NOKIA_PIXEL;
                ctx.font = 'bold 24px "Courier New", monospace';
                ctx.textAlign = 'center';
                const centerX = gameX + (gridWidth * pixelSize) / 2;
                const centerY = gameY + (gridHeight * pixelSize) / 2;
                ctx.fillText('PAUSED', centerX, centerY);
                ctx.textAlign = 'left';
            }

            // Draw Nokia logo at the bottom
            if (nokiaLogoImgRef.current && nokiaLogoImgRef.current.complete) {
                const logoWidth = 150;
                const logoHeight = (nokiaLogoImgRef.current.height / nokiaLogoImgRef.current.width) * logoWidth;
                const logoX = (canvas.width - logoWidth) / 2;
                const logoY = gameY + gridHeight * pixelSize + 25;

                ctx.drawImage(nokiaLogoImgRef.current, logoX, logoY, logoWidth, logoHeight);
            }
        };

        const updateGame = () => {
            const state = gameStateRef.current;
            if (state.gameOver || state.paused) return;

            // Update direction
            state.direction = state.nextDirection;

            // Move snake
            const head = { ...state.snake[0] };
            head.x += state.direction.x;
            head.y += state.direction.y;

            // Wrap around walls (infinite walls)
            if (head.x < 0) {
                head.x = gridWidth - 1;
            } else if (head.x >= gridWidth) {
                head.x = 0;
            }

            if (head.y < 0) {
                head.y = gridHeight - 1;
            } else if (head.y >= gridHeight) {
                head.y = 0;
            }

            // Check self collision
            if (
                state.snake.some(
                    (segment) => segment.x === head.x && segment.y === head.y
                )
            ) {
                state.gameOver = true;
                return;
            }

            state.snake.unshift(head);

            // Check food collision
            if (head.x === state.food.x && head.y === state.food.y) {
                state.score++;
                playEatSound(); // Play sound when eating food
                // Generate new food
                let newFood: { x: number; y: number };
                do {
                    newFood = {
                        x: Math.floor(Math.random() * gridWidth),
                        y: Math.floor(Math.random() * gridHeight),
                    };
                } while (
                    state.snake.some(
                        (segment) =>
                            segment.x === newFood.x && segment.y === newFood.y
                    )
                );
                state.food = newFood;
            } else {
                state.snake.pop();
            }
        };

        const resetGame = () => {
            gameStateRef.current = {
                snake: [{ x: 10, y: 10 }],
                food: { x: 15, y: 15 },
                direction: { x: 1, y: 0 },
                nextDirection: { x: 1, y: 0 },
                gameOver: false,
                score: 0,
                paused: false,
            };
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const state = gameStateRef.current;

            if (e.code === 'Space') {
                e.preventDefault();
                if (state.gameOver) {
                    resetGame();
                } else {
                    state.paused = !state.paused;
                }
                return;
            }

            if (state.gameOver || state.paused) return;

            switch (e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    if (state.direction.y === 0) {
                        state.nextDirection = { x: 0, y: -1 };
                    }
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    if (state.direction.y === 0) {
                        state.nextDirection = { x: 0, y: 1 };
                    }
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    if (state.direction.x === 0) {
                        state.nextDirection = { x: -1, y: 0 };
                    }
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    if (state.direction.x === 0) {
                        state.nextDirection = { x: 1, y: 0 };
                    }
                    e.preventDefault();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        const gameInterval = setInterval(() => {
            updateGame();
            drawGame();
        }, 120);

        drawGame();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearInterval(gameInterval);
        };
    }, []);

    return (
        <Window
            top={10}
            left={100}
            width={width}
            height={height}
            windowTitle="Snake - Nokia 3310"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Arrow Keys or WASD - SPACE to pause/restart'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#9bc700',
                }}
            >
                <canvas
                    ref={canvasRef}
                    width={310}
                    height={465}
                    style={{
                        imageRendering: 'pixelated',
                        border: '6px solid #1a1a1a',
                        borderRadius: '4px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 0 30px rgba(0,0,0,0.2)',
                    }}
                />
            </div>
        </Window>
    );
};

export default SnakeApp;
