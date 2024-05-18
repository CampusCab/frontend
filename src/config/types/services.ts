export type ServiceResponse = object | boolean | number | string | undefined
export type ServiceParams =
  | string
  | Record<string, string>
  | URLSearchParams
  | undefined
export type ServiceBody = BodyInit | object | undefined
export type ServiceError = object | undefined

export type FetchServiceParams<
  B extends ServiceBody,
  R extends ServiceResponse
> = {
  readonly url: string
  readonly method: string
  readonly headers?: HeadersInit
  readonly body?: B
  response?: R
}
