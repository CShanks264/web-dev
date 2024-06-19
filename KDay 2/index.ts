// testing git
type Car = {
    price: number
    make: string
    model: string
    year: number
    color: string
    isManual: boolean
}

const myCar: Car = {
    price: 12000,
    make: 'Subaru',
    model: "Impreza Sport",
    year: 2012,
    color: "blue",
    isManual: false
}

let myMoney: number = 12000

const buyCar = (car: Car) => {
    if (myMoney >= car.price) {
        myMoney = myMoney - car.price
        console.log(`You purchased the ${car.make} ${car.model}!`)
    } else {
        console.log('you broke...')
    }
}
buyCar(myCar)
console.log(myMoney)

type ParkingSpace = Car | null

type ParkingLot = [ParkingSpace, ParkingSpace, ParkingSpace, ParkingSpace]

const parkingLot: ParkingLot = [null, null, myCar, null]


// -------------------------------------------

type Bread = {
    isToasted: boolean
    isBurnt: boolean
}

type Toaster = {
    isFull: boolean
    content: Bread | null
    time: number
    toast: (bread: Bread) => Bread
}

const newToaster: Toaster = {
    isFull: false,
    content: null,
    time: 10,
    toast: (bread) => {
        if (this.time > 20) {
            bread.isBurnt = true
        } else  if (this.time > 0) {
            bread.isToasted = true
        }
        return bread
    }
}

