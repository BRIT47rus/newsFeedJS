import { RefObject } from 'react';

export type InputNameType = 'company-name' | 'title' | 'text' | 'description' | 'image';
export type InputValueType = {
  [key in InputNameType]: string;
};
export type InputErrorsType = {
  [key in InputNameType]: string;
};
export type InputRefsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in InputNameType]: RefObject<any>;
};
// type InputElement = HTMLInputElement | HTMLTextAreaElement;
// export type InputRefsType = {
//   [key in InputNameType]: RefObject<InputElement | null>;
// };
// type MappedRefTypes = {
//   'company-name': RefObject<HTMLInputElement | null>;
//   title: RefObject<HTMLInputElement | null>;
//   image: RefObject<HTMLInputElement | null>;
//   description: RefObject<HTMLTextAreaElement | HTMLDivElement | null>;
//   text: RefObject<HTMLTextAreaElement | HTMLDivElement | null>;
// };
// export type InputRefsType = {
//   [key in InputNameType]: MappedRefTypes[key];
// };
