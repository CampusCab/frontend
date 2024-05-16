import { Vehicle } from './trips'
import { UserInfo } from './user'

// Forms
export type TLoginForm = {
  email: string
  password: string
}

export type TRegisterForm = UserInfo & {
  confirmPassword: string
}

export type TConfirmRegisterForm = {
  char1: number
  char2: number
  char3: number
  char4: number
  char5: number
  char6: number
}

export type TOfferTrip = {
  vehicle: Vehicle
  origin: string
  destination: string
  hour: string
  description: string
}
