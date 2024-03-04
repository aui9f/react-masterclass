// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
    // DefaultTheme을 확장
  export interface DefaultTheme {
    bgColor?: string;
    textColor: string;
    btnColor?: string;
    accentColor?: string;
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
    red: string;
  black: {
    varDark: string;
    darker: string;
    lighter: string;
  },
  white: {
    lighter: string;
    darker: string;
  },
  }
}



// src/types/images.d.ts
declare module '*.png';