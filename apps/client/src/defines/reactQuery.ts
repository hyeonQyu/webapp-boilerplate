import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface UseQueryParams<Res, Req = undefined> {
  req: Req;
  queryOption?: UseQueryOptions<Res, AxiosError<Res>>;
}

export interface UseMutationParams<Res, Req> {
  mutationOption?: UseMutationOptions<Res, AxiosError<Res>, Req>;
}

export const QUERY_KEY = {};
