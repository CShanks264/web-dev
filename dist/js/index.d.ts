type Car = {
    price: number;
    make: string;
    model: string;
    year: number;
    color: string;
    isManual: boolean;
};
declare const myCar: Car;
declare let myMoney: number;
declare const buyCar: (car: Car) => void;
type ParkingSpace = Car | null;
type ParkingLot = [ParkingSpace, ParkingSpace, ParkingSpace, ParkingSpace];
declare const parkingLot: ParkingLot;
type Bread = {
    isToasted: boolean;
    isBurnt: boolean;
};
type Toaster = {
    isFull: boolean;
    content: Bread | null;
    time: number;
    toast: (bread: Bread) => Bread;
};
