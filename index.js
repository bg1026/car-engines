// Car Engine Simulation in JavaScript

class Engine {
    constructor(horsePower) {
        this.horsePower = horsePower;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        console.log(`Engine with ${this.horsePower} HP started.`);
    }

    stop() {
        this.isRunning = false;
        console.log('Engine stopped.');
    }

    status() {
        return this.isRunning ? 'running' : 'stopped';
    }
}

// Example usage
const myEngine = new Engine(300);
myEngine.start();
console.log(`Current engine status: ${myEngine.status()}`);
myEngine.stop();
console.log(`Current engine status: ${myEngine.status()}`);
