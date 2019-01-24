import { Component } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent {
    public name = 'Peugeot 107';
    public tankCapacity = 30;
    public mileage =  0;
    public fuel = 10;
    public fuelConsumption = 5;
    public characteristics = ['Max speed 170 km/h', 'Engine 1l', 'Clearens 16sm', 'Airconditioner True'];

    /** drive - function which updates data according to received distance value */
    drive(distance: number): void {
        if (distance > 0) {
            const requiredFuel = Math.round(( distance / 100 ) * this.fuelConsumption * 100) / 100;
            if (this.fuel > requiredFuel) {
                this.mileage += distance;
                this.fuel -= requiredFuel;
                this.fuel = Math.round( this.fuel * 100 ) / 100;
            } else {
                this.mileage += this.fuel / this.fuelConsumption * 100;
                this.fuel = 0;
            }
        } else {
            console.log('Provide correct distance to refuel the tank!');
        }
    }

    /** refuel - function which updates fuel value*/
    refuel(volume: number): void {
        if (volume > 0) {
            this.fuel += volume;
            this.fuel = this.fuel > this.tankCapacity ? this.tankCapacity : this.fuel;
        } else {
            console.log('Provide correct volume to refuel the tank!');
        }
    }

}
