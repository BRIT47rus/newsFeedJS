declare module '*.svg' {
  // import React = import('react'); // <-- This line causes the error
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
