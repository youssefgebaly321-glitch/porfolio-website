import React, { useEffect, useRef } from 'react';

interface GenesisPlayerProps {
    width: number;
    height: number;
    romUrl: string;
}

declare global {
    interface Window {
        EJS_player: string;
        EJS_core: string;
        EJS_gameUrl: string;
        EJS_pathtodata: string;
        EJS_startOnLoaded: boolean;
        EJS_loadStateOnStart: boolean;
        EJS_defaultControls: any;
    }
}

export default function GenesisPlayer(props: GenesisPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        if (!containerRef.current || scriptLoadedRef.current) return;

        // Configure EmulatorJS
        window.EJS_player = '#emulator-container';
        window.EJS_core = 'genesis';
        window.EJS_gameUrl = props.romUrl;
        window.EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
        window.EJS_startOnLoaded = true;
        window.EJS_loadStateOnStart = false;

        // Configure controls to use arrow keys
        window.EJS_defaultControls = {
            0: {  // Player 1
                0: 38,  // Up arrow
                1: 40,  // Down arrow
                2: 37,  // Left arrow
                3: 39,  // Right arrow
                4: 90,  // Z key (A button)
                5: 88,  // X key (B button)
                6: 67,  // C key (C button)
                7: 13,  // Enter (Start)
                8: 16,  // Shift (Select/Mode)
            }
        };

        // Load EmulatorJS script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js';
        script.async = true;
        script.onload = () => {
            scriptLoadedRef.current = true;
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [props.romUrl]);

    return (
        <div
            id="emulator-container"
            ref={containerRef}
            style={{
                width: props.width,
                height: props.height,
                position: 'relative',
            }}
        />
    );
}
