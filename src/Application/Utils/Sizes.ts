import EventEmitter from './EventEmitter';

export default class Sizes extends EventEmitter {
    width: number;
    height: number;
    pixelRatio: number;
    private resizeTimeout: number | null = null;

    constructor() {
        super();

        // Setup
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Resize event with debouncing and dimension change detection
        window.addEventListener('resize', () => {
            // Clear existing timeout
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }

            // Debounce: only trigger after 150ms of no resize events
            this.resizeTimeout = window.setTimeout(() => {
                const newWidth = window.innerWidth;
                const newHeight = window.innerHeight;
                const newPixelRatio = Math.min(window.devicePixelRatio, 2);

                // Only trigger resize if dimensions actually changed
                // This prevents zoom-only events from triggering re-renders
                if (
                    newWidth !== this.width ||
                    newHeight !== this.height ||
                    newPixelRatio !== this.pixelRatio
                ) {
                    this.width = newWidth;
                    this.height = newHeight;
                    this.pixelRatio = newPixelRatio;

                    this.trigger('resize');
                }

                this.resizeTimeout = null;
            }, 150);
        });
    }
}
