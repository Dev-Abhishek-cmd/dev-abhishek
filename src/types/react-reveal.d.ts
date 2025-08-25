declare module "react-reveal" {
  import * as React from "react";
  export interface FadeProps {
    children?: React.ReactNode;
    bottom?: boolean;
    duration?: number;
    distance?: string;
    [key: string]: any;
  }
  export class Fade extends React.Component<FadeProps> {}
}