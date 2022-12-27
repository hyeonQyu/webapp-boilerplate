export interface CommonRes<T = object> {
  status: number;
  errorMessage?: string;
  data?: T;
}
