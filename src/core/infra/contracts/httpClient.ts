export interface HttpRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

interface BaseRequest {
  path: string;
  config?: HttpRequestConfig;
}

export type GetRequest = BaseRequest;

export type PostRequest<TBody> = BaseRequest & {
  body: TBody;
};

export type PatchRequest<TBody> = BaseRequest & {
  body: TBody;
};

export interface HttpClient {
  get<TResponse>({ path, config }: GetRequest): Promise<TResponse>;
  post<TBody, TResponse>({
    path,
    body,
    config,
  }: PostRequest<TBody>): Promise<TResponse>;
  patch<TBody, TResponse>({
    path,
    body,
    config,
  }: PatchRequest<TBody>): Promise<TResponse>;
}
