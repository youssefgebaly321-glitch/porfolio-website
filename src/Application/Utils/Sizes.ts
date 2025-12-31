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

        // Resize event with debouncing
        window.addEventListener('resize', () => {
            // Clear existing timeout
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }

            // Debounce: only trigger after 150ms of no resize events
            this.resizeTimeout = window.setTimeout(() => {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.pixelRatio = Math.min(window.devicePixelRatio, 2);

                this.trigger('resize');
                this.resizeTimeout = null;
            }, 150);
        });
    }
}
