export interface Driver {
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
  description?: string
}
