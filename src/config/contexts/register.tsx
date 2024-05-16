export type TRegisterContext = {
  verify: (data: { email: string; verification_code: string }) => Promise<void>
}
