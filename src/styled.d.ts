// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
    // DefaultTheme을 확장
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    btnColor?: string;
    accentColor?: string;
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}