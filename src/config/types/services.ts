export type ServiceResponse = object | boolean | number | string | undefined
export type ServiceParams =string | undefined
export type ServiceBody = BodyInit | object | undefined
export type ServiceError = object | undefined

export type FetchServiceParams<
  B extends ServiceBody,
  R extends ServiceResponse,
  P extends ServiceParams
> = {
  readonly url: string
  readonly method: string
  readonly headers?: HeadersInit
  readonly body?: B
  readonly params?: P
  response?: R
}
