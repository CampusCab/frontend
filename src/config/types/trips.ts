export interface Passenger {
  idType: string
  idNumber: string
  firstName: string
  lastName: string
  image?: string
  offer?: PaymentOffer
}

export interface Driver {
  image?: string
  idType: string
  idNumber: string
  firstName: string
  lastName: string
  stars: string
}

export interface Vehicle {
  id: string
  type: 'car' | 'motorcycle'
  brand: string
  model: string
  year: number
  seats: number
  image?: string
}

export interface TripInfo {
  id: number
  driver: Driver
  origin: string
  destination: string
  date: string
  hour: string
  availableSeats: number
  maxSeats: number
  description?: string
}

export interface PaymentOffer {
  id: number
  trip: TripInfo
  ammount: number
}
