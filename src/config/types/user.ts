import { Vehicle } from "./trips"

export type RegisterInfo = {
  email: string
  phone: string
  first_name: string
  last_name: string
  gender: string
}

export type UserInfo = RegisterInfo & {
  id: number
  email: string
  phone: string
  first_name: string
  last_name: string
  gender: string
  total_stars_driver: number
  total_trips_driver: number
  rating_driver: number
  currently_driver: boolean
  current_trip_driver: null
  total_stars_passenger: number
  total_trips_passenger: number
  rating_passenger: number
  currently_passenger: boolean
  current_offer_passenger: null
}

export type Tokens = {
  refresh_token: string
  access_token: string
}

export type User = UserInfo & Tokens & {
  isLogged: boolean
}

export interface Profile {
  image?: string
  firstName: string
  lastName: string
  phone: string
  email: string
  carsRegistered: Vehicle[]
  trips: {
    asDriver: {
      amount: number
      stars: number
      comments: string[]
    }
    asPassenger: { 
      amount: number
      stars: number 
      comments: string[]
    }
  }
  amounts: {
    money: number
    commissions: number
  }
}
