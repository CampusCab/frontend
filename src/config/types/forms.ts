import { Vehicle } from './trips'
import { RegisterInfo } from './user'

// Forms
export type TLoginForm = {
  email: string
  password: string
}

export type TRegisterForm = RegisterInfo & {
  password: string
  confirmPassword: string
}

export type TVerifyRegisterForm = {
  char1: string
  char2: string
  char3: string
  char4: string
  char5: string
  char6: string
}

export type TOfferTrip = {
  vehicle: Vehicle
  origin: string
  destination: string
  hour: string
  description: string
}
