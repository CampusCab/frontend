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
  vehicle: number
  origin: string
  otherOrigin: string
  destination: string
  otherDestination: string
  start_time: string
  description?: string
}

export type TEditProfile = {
  first_name: string
  last_name: string
  phone: string
}
