export interface BaseUsecase<P, R> {
  execute: (params: P) => Promise<R>;
}
