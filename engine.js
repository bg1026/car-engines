// engine.js

class CarEngine {
    constructor(name, horsepower) {
        this.name = name;
        this.horsepower = horsepower;
        this.rpm = 0;
    }

    start() {
        console.log(`Starting ${this.name} engine with ${this.horsepower} horsepower!`);
        this.rpm = 800; // Idle RPM
        this.run();
    }

    run() {
        const interval = setInterval(() => {
            if (this.rpm > 0) {
                console.log(`Engine RPM: ${this.rpm}`);
                this.rpm += 100;
            } else {
                clearInterval(interval);
                console.log(`${this.name} engine stopped.`);
            }
            // Simulating a limit to the RPM
            if (this.rpm >= 6000) {
                console.log(`${this.name} engine revved to the limit!`);
                this.rpm = 0; // Stop the engine after reaching limit
            }
        }, 1000);
    }

    stop() {
        console.log(`${this.name} engine is stopping...`);
        this.rpm = 0;
    }
}

// Example Usage:
const v8Engine = new CarEngine('V8', 450);
v8Engine.start();
setTimeout(() => v8Engine.stop(), 5000); // Stop the engine after 5 seconds
