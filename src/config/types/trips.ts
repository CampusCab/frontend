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
  license: string
  type: 'car' | 'bike'
  model: string
  max_passengers: number
}

export interface TripInfo {
  id: number
  driver: Driver
  origin: string
  destination: string
  date: string
  availableSeats: number
  maxSeats: number
  description?: string
}

export interface PaymentOffer {
  id: number
  trip: TripInfo
  ammount: number
}


