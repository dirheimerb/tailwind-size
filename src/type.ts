/**
 * Sizing
 * @description This module provides a set of utility classes for sizing elements.
 */
export type SizingKeys =
| 's0'
| 's1'
| 's2'
| 's3'
| 's4'
| 's5'
| 's6'
| 's8'
| 's10'
| 's12'
| 's16'
| 's20'
| 's24'
| 's32'
| 's40'
| 's48'
| 's56'
| 's64'
| 's72'
| 's80'
| 's96'
| 'spx'
| 's05'
| 's15'
| 's25'
| 's35'
| 's14'
| 's28'
| 's36'
| 's44'
| 's52'
| 's60'
| 'sAuto'
| 'sHalf'
| 'sThird'
| 'sTwoThird'
| 'sQuarter'
| 'sThreeQuarter'
| 'sFifth'
| 'sTwoFifth'
| 'sThreeFifth'
| 'sFourFifth'
| 'sSixth'
| 'sTwoSixth'
| 'sThreeSixth'
| 'sFourSixth'
| 'sFiveSixth'
| 'sTwelve'
| 'sTwoTwelve'
| 'sThreeTwelve'
| 'sFourTwelve'
| 'sFiveTwelve'
| 'sSixTwelve'
| 'sSevenTwelve'
| 'sEightTwelve'
| 'sNineTwelve'
| 'sTenTwelve'
| 'sElevenTwelve'
| 'sFull'
| 'sMin'
| 'sMax'
| 'sFit'
| 'sScreen';

export type SizingOptions = {
    /**
     * @description The width of the element.
     * @type {string} width
     */
    width: string;
    /**
     * @description The height of the element.
     * @type {string} height
     */
    height: string;
}


/**
 * @type {SizingValues} Sizing - The sizing object
 * @property {SizingOptions} s0 - width: 0px; height: 0px;
 * @property {SizingOptions} s1 - width: 0.25rem; height: 0.25rem;
 * @property {SizingOptions} s2 - width: 0.5rem; height: 0.5rem;
 * @property {SizingOptions} s3 - width: 0.75rem; height: 0.75rem;
 * @property {SizingOptions} s4 - width: 1rem; height: 1rem;
 * @property {SizingOptions} s5 - width: 1.25rem; height: 1.25rem;
 * @property {SizingOptions} s6 - width: 1.5rem; height: 1.5rem;
 * @property {SizingOptions} s8 - width: 2rem; height: 2rem;
 * @property {SizingOptions} s10 - width: 2.5rem; height: 2.5rem;
 * @property {SizingOptions} s12 - width: 3rem; height: 3rem;
 * @property {SizingOptions} s16 - width: 4rem; height: 4rem;
 * @property {SizingOptions} s20 - width: 5rem; height: 5rem;
 * @property {SizingOptions} s24 - width: 6rem; height: 6rem;
 * @property {SizingOptions} s32 - width: 8rem; height: 8rem;
 * @property {SizingOptions} s40 - width: 10rem; height: 10rem;
 * @property {SizingOptions} s48 - width: 12rem; height: 12rem;
 * @property {SizingOptions} s56 - width: 14rem; height: 14rem;
 * @property {SizingOptions} s64 - width: 16rem; height: 16rem;
 * @property {SizingOptions} s72 - width: 18rem; height: 18rem;
 * @property {SizingOptions} s80 - width: 20rem; height: 20rem;
 * @property {SizingOptions} s96 - width: 24rem; height: 24rem;
 * @property {SizingOptions} spx - width: 1px; height: 1px;
 * @property {SizingOptions} s05 - width: 0.125rem; height: 0.125rem;
 * @property {SizingOptions} s15 - width: 0.375rem; height: 0.375rem;
 * @property {SizingOptions} s25 - width: 0.625rem; height: 0.625rem;
 * @property {SizingOptions} s35 - width: 0.875rem; height: 0.875rem;
 * @property {SizingOptions} s14 - width: 3.5rem; height: 3.5rem;
 * @property {SizingOptions} s28 - width: 7rem; height: 7rem;
 * @property {SizingOptions} s36 - width: 9rem; height: 9rem;
 * @property {SizingOptions} s44 - width: 11rem; height: 11rem;
 * @property {SizingOptions} s52 - width: 13rem; height: 13rem;
 * @property {SizingOptions} s60 - width: 15rem; height: 15rem;
 * @property {SizingOptions} sAuto - width: auto;height: auto;
 * @property {SizingOptions} sHalf - width: 50%; height: 50%;
 * @property {SizingOptions} sThird - width: 33.333333%; height: 33.333333%;
 * @property {SizingOptions} sTwoThird - width: 66.666667%; height: 66.666667%;
 * @property {SizingOptions} sQuarter - width: 25%; height: 25%;
 * @property {SizingOptions} sThreeQuarter - width: 75%; height: 75%;
 * @property {SizingOptions} sFifth - width: 20%; height: 20%;
 * @property {SizingOptions} sTwoFifth - width: 40%; height: 40%;
 * @property {SizingOptions} sThreeFifth - width: 60%; height: 60%;
 * @property {SizingOptions} sFourFifth - width: 80%; height: 80%;
 * @property {SizingOptions} sSixth - width: 16.666667%; height: 16.666667%;
 * @property {SizingOptions} sTwoSixth - width: 33.333333%; height: 33.333333%;
 * @property {SizingOptions} sThreeSixth - width: 50%; height: 50%;
 * @property {SizingOptions} sFourSixth - width: 66.666667%; height: 66.666667%;
 * @property {SizingOptions} sFiveSixth - width: 83.333333%;height: 83.333333%;
 * @property {SizingOptions} sTwelve - width: 8.333333%; height: 8.333333%;
 * @property {SizingOptions} sTwoTwelve - width: 16.666667%; height: 16.666667%;
 * @property {SizingOptions} sThreeTwelve - width: 25%; height: 25%;
 * @property {SizingOptions} sFourTwelve - width: 33.333333%; height: 33.333333%;
 * @property {SizingOptions} sFiveTwelve - width: 41.666667%; height: 41.666667%;
 * @property {SizingOptions} sSixTwelve - width: 50%; height: 50%;
 * @property {SizingOptions} sSevenTwelve - width: 58.333333%; height: 58.333333%;
 * @property {SizingOptions} sEightTwelve - width: 66.666667%; height: 66.666667%;
 * @property {SizingOptions} sNineTwelve - width: 75%; height: 75%;
 * @property {SizingOptions} sTenTwelve - width: 83.333333%;height: 83.333333%;
 * @property {SizingOptions} sElevenTwelve - width: 91.666667%; height: 91.666667%;
 * @property {SizingOptions} sFull - width: 100%; height: 100%;
 * @property {SizingOptions} sMin - width: min-content; height: min-content;
 *  @property {SizingOptions} sMax - width: max-content; height: max-content;
 * @property {SizingOptions} sFit - width: fit-content; height: fit-content;
 * @property {SizingOptions} sScreen - width: 100vw; height: 100vh;
 */
export type SizingValues = Record<SizingKeys, SizingOptions>;