export type Car = {
    price: number
    make: string
    model: string
    year: number
    color: string
    isManual: boolean
}
export type ParkingSpace = Car | null

export type ParkingLot = [ParkingSpace, ParkingSpace, ParkingSpace, ParkingSpace]
