import React, { useState } from 'react';
import Window from '../os/Window';

export interface SonicAppProps extends WindowAppProps {}

const SonicApp: React.FC<SonicAppProps> = (props) => {
    const [width, setWidth] = useState(640);
    const [height, setHeight] = useState(480);

    return (
        <Window
            top={50}
            left={150}
            width={width}
            height={height}
            windowTitle="Sonic the Hedgehog"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Start game with Enter - X to Jump - Arrow Keys to Move'}
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
                    backgroundColor: '#0066cc',
                }}
            >
                <iframe
                    src="https://www.retrogames.cc/embed/30299-sonic-the-hedgehog-usa-europe.html"
                    width="100%"
                    height="100%"
                    style={{
                        border: 'none',
                    }}
                    allow="autoplay; gamepad; midi; fullscreen"
                    allowFullScreen
                    title="Sonic the Hedgehog"
                />
            </div>
        </Window>
    );
};

export default SonicApp;
