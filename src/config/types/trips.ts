export interface Passenger {
  idType: string
  idNumber: string
  firstName: string
  lastName: string
  image?: string
  offer?: Offer
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
  id?: number
  license: string
  vehicle_type?: 'car' | 'bike'
  model: string
  max_passengers: number
}

export interface TripInfo {
  id?: number
  vehicle: number
  origin: string
  destination: string
  start_time: string
  description: string
  offers: Offer[]
}

export interface Offer {
  id: number
  passenger_id: number
  amount: number
  pending_to_rate_user: boolean
}
