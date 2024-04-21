import type { Config } from 'tailwindcss';
import sizingValues from './src/sizing';

const config: Config = {
    content: [
        './src/**/*.html',
        './src/**/*:.{ts, tsx, js, jsx},',
    ],
    // theme: {
    //     extend: {
    //         s0: {
    //             width: '0px',
    //             height: '0px',
    //           },
    //           s1: {
    //             width: '0.25rem',
    //             height: '0.25rem',
    //           },
    //           s2: {
    //             width: '0.5rem',
    //             height: '0.5rem',
    //           },
    //           s3: {
    //             width: '0.75rem',
    //             height: '0.75rem',
    //           },
    //           s4: {
    //             width: '1rem',
    //             height: '1rem',
    //           },
    //           s5: {
    //             width: '1.25rem',
    //             height: '1.25rem',
    //           },
    //           s6: {
    //             width: '1.5rem',
    //             height: '1.5rem',
    //           },
    //           s8: {
    //             width: '2rem',
    //             height: '2rem',
    //           },
    //           s10: {
    //             width: '2.5rem',
    //             height: '2.5rem',
    //           },
    //           s12: {
    //             width: '3rem',
    //             height: '3rem',
    //           },
    //           s16: {
    //             width: '4rem',
    //             height: '4rem',
    //           },
    //           s20: {
    //             width: '5rem',
    //             height: '5rem',
    //           },
    //           s24: {
    //             width: '6rem',
    //             height: '6rem',
    //           },
    //           s32: {
    //             width: '8rem',
    //             height: '8rem',
    //           },
    //           s40: {
    //             width: '10rem',
    //             height: '10rem',
    //           },
    //           s48: {
    //             width: '12rem',
    //             height: '12rem',
    //           },
    //           s56: {
    //             width: '14rem',
    //             height: '14rem',
    //           },
    //           s64: {
    //             width: '16rem',
    //             height: '16rem',
    //           },
    //           s72: {
    //             width: '18rem',
    //             height: '18rem',
    //           },
    //           s80: {
    //             width: '20rem',
    //             height: '20rem',
    //           },
    //           s96: {
    //             width: '24rem',
    //             height: '24rem',
    //           },
    //           spx: {
    //             width: '1px',
    //             height: '1px',
    //           },
    //           s05: {
    //             width: '0.125rem',
    //             height: '0.125rem',
    //           },
    //           s15: {
    //             width: '0.375rem',
    //             height: '0.375rem',
    //           },
    //           s25: {
    //             width: '0.625rem',
    //             height: '0.625rem',
    //           },
    //           s35: {
    //             width: '0.875rem',
    //             height: '0.875rem',
    //           },
    //           s14: {
    //             width: '3.5rem',
    //             height: '3.5rem',
    //           },
    //           s28: {
    //             width: '7rem',
    //             height: '7rem',
    //           },
    //           s36: {
    //             width: '9rem',
    //             height: '9rem',
    //           },
    //           s44: {
    //             width: '11rem',
    //             height: '11rem',
    //           },
    //           s52: {
    //             width: '13rem',
    //             height: '13rem',
    //           },
    //           s60: {
    //             width: '15rem',
    //             height: '15rem',
    //           },
              
    //           sAuto: {
    //             width: 'auto',
    //             height: 'auto',
    //           },
    //           sHalf: {
    //             width: '50%',
    //             height: '50%',
    //           },
    //           sThird: {
    //             width: '33.333333%',
    //             height: '33.333333%',
    //           },
    //           sTwoThird: {
    //             width: '66.666667%',
    //             height: '66.666667%',
    //           },
    //           sQuarter: {
    //             width: '25%',
    //             height: '25%',
    //           },
    //           sThreeQuarter: {
    //             width: '75%',
    //             height: '75%',
    //           },
    //           sFifth: {
    //             width: '20%',
    //             height: '20%',
    //           },
    //           sTwoFifth: {
    //             width: '40%',
    //             height: '40%',
    //           },
    //           sThreeFifth: {
    //             width: '60%',
    //             height: '60%',
    //           },
    //           sFourFifth: {
    //             width: '80%',
    //             height: '80%',
    //           },
    //           sSixth: {
    //             width: '16.666667%',
    //             height: '16.666667%',
    //           },
    //           sTwoSixth: {
    //             width: '33.333333%',
    //             height: '33.333333%',
    //           },
    //           sThreeSixth: {
    //             width: '50%',
    //             height: '50%',
    //           },
    //           sFourSixth: {
    //             width: '66.666667%',
    //             height: '66.666667%',
    //           },
    //           sFiveSixth: {
    //             width: '83.333333%',
    //             height: '83.333333%',
    //           },
    //           sTwelve: {
    //             width: '8.333333%',
    //             height: '8.333333%',
    //           },
    //           sTwoTwelve: {
    //             width: '16.666667%',
    //             height: '16.666667%',
    //           },
    //           sThreeTwelve: {
    //             width: '25%',
    //             height: '25%',
    //           },
    //           sFourTwelve: {
    //             width: '33.333333%',
    //             height: '33.333333%',
    //           },
    //           sFiveTwelve: {
    //             width: '41.666667%',
    //             height: '41.666667%',
    //           },
    //           sSixTwelve: {
    //             width: '50%',
    //             height: '50%',
    //           },
    //           sSevenTwelve: {
    //             width: '58.333333%',
    //             height: '58.333333%',
    //           },
    //           sEightTwelve: {
    //             width: '66.666667%',
    //             height: '66.666667%',
    //           },
    //           sNineTwelve: {
    //             width: '75%',
    //             height: '75%',
    //           },
    //           sTenTwelve: {
    //             width: '83.333333%',
    //             height: '83.333333%',
    //           },
    //           sElevenTwelve: {
    //             width: '91.666667%',
    //             height: '91.666667%',
    //           },
    //           sFull: {
    //             width: '100%',
    //             height: '100%',
    //           },
    //           sMin: {
    //             width: 'min-content',
    //             height: 'min-content',
    //           },
    //           sMax: {
    //             width: 'max-content',
    //             height: 'max-content',
    //           },
    //           sFit: {
    //             width: 'fit-content',
    //             height: 'fit-content',
    //           },
    //           sScreen: {
    //             width: '100vw',
    //             height: '100vh',
    //           },
    //         },
    plugins: [
        sizingValues,
    ],
}
export default config;
