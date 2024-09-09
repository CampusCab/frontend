import { UserInfo } from './user'

export interface Passenger {
  passenger_id: number
  passenger_name: string
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
  capacity: number
  vehicle_info: Vehicle
  offers?: Offer[]
  driver_info?: UserInfo
}

export interface Offer {
  id: number
  passenger_id: number
  passenger_name: string
  amount: number
  trip?: number
  pending_to_rate_user?: boolean
  accepted?: boolean
  finished?: boolean
  finished_by?: string
  stars_to_user?: number
  stars_to_driver?: number
}
