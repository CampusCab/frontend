export interface Driver {
  image?: string
  idType: string
  idNumber: string
  firstName: string
  lastName: string
  stars: number
}

export interface TripsList {
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
