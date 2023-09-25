import {GuitarType} from "@backend/shared/app-types";

export enum ProductError {
  NotFound = 'Type not found',
  NoAccess = 'User does not have access to this type',
}

export interface ProductQueryOptions {
  page?: number;
  limit?: number;
  tag?: string[];
  title?: string;
  type?: GuitarType;
  sort?: 'date' | 'like' | 'desc';
}

export enum QueryDefault {
  Page = 1,
  Limit = 25,
  Direction = 'desc',
}

export const GUITAR_NAME = 'Guitar';

export const stringsCount = [4, 6, 7, 12];
export const guitarTypes = ['electro', 'acoustic', 'ukulele']
