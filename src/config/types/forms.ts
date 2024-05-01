// Forms
export type TLoginForm = {
  email: string
  password: string
}

export type TRegisterForm = {
  firstName: string
  lastName: string
  email: string
  phone: number
  password: string
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