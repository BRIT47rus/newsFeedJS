import { RefObject } from 'react';

export type InputNameType = 'company-name' | 'title' | 'text' | 'description' | 'image';
export type InputValueType = {
  [key in InputNameType]: string;
};
export type InputErrorsType = {
  [key in InputNameType]: string;
};
export type InputRefsType = {
  [key in InputNameType]: RefObject<any>;
};
