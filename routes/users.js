import express from 'express';

const router = express.Router();

const users = [
    {
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 11699,
        ChronicAbsenteeismCount: 1270,
        ChronicAbsenteeismRate: 10.9
    },
    {
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 109029,
        ChronicAbsenteeismCount: 11268,
        ChronicAbsenteeismRate: 10.3
    },
    {
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 97419,
        ChronicAbsenteeismCount: 10025,
        ChronicAbsenteeismRate: 10.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 11650,
        ChronicAbsenteeismCount: 1448,
        ChronicAbsenteeismRate: 12.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 104393,
        ChronicAbsenteeismCount: 12413,
        ChronicAbsenteeismRate: 11.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 11591,
        ChronicAbsenteeismCount: 13839,
        ChronicAbsenteeismRate: 11.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 4318,
        ChronicAbsenteeismCount: 434,
        ChronicAbsenteeismRate: 10.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 46779,
        ChronicAbsenteeismCount: 3833,
        ChronicAbsenteeismRate: 8.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 51066,
        ChronicAbsenteeismCount: 4265,
        ChronicAbsenteeismRate: 8.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 45488,
        ChronicAbsenteeismCount: 3805,
        ChronicAbsenteeismRate: 8.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 50450,
        ChronicAbsenteeismCount: 4154,
        ChronicAbsenteeismRate: 8.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 4980,
        ChronicAbsenteeismCount: 353,
        ChronicAbsenteeismRate: 7.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 33883,
        ChronicAbsenteeismCount: 3189,
        ChronicAbsenteeismRate: 9.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 29493,
        ChronicAbsenteeismCount: 2765,
        ChronicAbsenteeismRate: 9.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 4408,
        ChronicAbsenteeismCount: 426,
        ChronicAbsenteeismRate: 9.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 8187,
        ChronicAbsenteeismCount: 1290,
        ChronicAbsenteeismRate: 15.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 62922,
        ChronicAbsenteeismCount: 10402,
        ChronicAbsenteeismRate: 16.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 71000,
        ChronicAbsenteeismCount: 11654,
        ChronicAbsenteeismRate: 16.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 138955,
        ChronicAbsenteeismCount: 12054,
        ChronicAbsenteeismRate: 8.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 154050,
        ChronicAbsenteeismCount: 13472,
        ChronicAbsenteeismRate: 8.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 15177,
        ChronicAbsenteeismCount: 1430,
        ChronicAbsenteeismRate: 9.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 17195,
        ChronicAbsenteeismCount: 1651,
        ChronicAbsenteeismRate: 9.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 1471,
        ChronicAbsenteeismCount: 217,
        ChronicAbsenteeismRate: 14.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 18651,
        ChronicAbsenteeismCount: 1864,
        ChronicAbsenteeismRate: 10
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 65,
        ChronicAbsenteeismCount: 17,
        ChronicAbsenteeismRate: 26.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 80,
        ChronicAbsenteeismCount: 19,
        ChronicAbsenteeismRate: 23.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 15,
        ChronicAbsenteeismCount: 2,
        ChronicAbsenteeismRate: 13.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 62120,
        ChronicAbsenteeismCount: 1761,
        ChronicAbsenteeismRate: 2.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2848,
        ChronicAbsenteeismCount: 115,
        ChronicAbsenteeismRate: 4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 59297,
        ChronicAbsenteeismCount: 1650,
        ChronicAbsenteeismRate: 2.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 3874,
        ChronicAbsenteeismCount: 716,
        ChronicAbsenteeismRate: 18.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 19955,
        ChronicAbsenteeismCount: 5303,
        ChronicAbsenteeismRate: 26.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 16121,
        ChronicAbsenteeismCount: 4602,
        ChronicAbsenteeismRate: 28.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2293,
        ChronicAbsenteeismCount: 334,
        ChronicAbsenteeismRate: 14.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2691,
        ChronicAbsenteeismCount: 365,
        ChronicAbsenteeismRate: 13.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 403,
        ChronicAbsenteeismCount: 31,
        ChronicAbsenteeismRate: 7.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 423,
        ChronicAbsenteeismCount: 19,
        ChronicAbsenteeismRate: 4.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 9993,
        ChronicAbsenteeismCount: 530,
        ChronicAbsenteeismRate: 5.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 9571,
        ChronicAbsenteeismCount: 511,
        ChronicAbsenteeismRate: 5.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 64429,
        ChronicAbsenteeismCount: 11405,
        ChronicAbsenteeismRate: 17.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 12378,
        ChronicAbsenteeismCount: 1514,
        ChronicAbsenteeismRate: 12.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 76716,
        ChronicAbsenteeismCount: 12891,
        ChronicAbsenteeismRate: 16.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 526,
        ChronicAbsenteeismCount: 106,
        ChronicAbsenteeismRate: 20.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 573,
        ChronicAbsenteeismCount: 113,
        ChronicAbsenteeismRate: 19.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 49,
        ChronicAbsenteeismCount: 8,
        ChronicAbsenteeismRate: 16.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 1972,
        ChronicAbsenteeismCount: 479,
        ChronicAbsenteeismRate: 24.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 186,
        ChronicAbsenteeismCount: 39,
        ChronicAbsenteeismRate: 21
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2158,
        ChronicAbsenteeismCount: 518,
        ChronicAbsenteeismRate: 24
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 12914,
        ChronicAbsenteeismCount: 1090,
        ChronicAbsenteeismRate: 8.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 14068,
        ChronicAbsenteeismCount: 1200,
        ChronicAbsenteeismRate: 8.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 1163,
        ChronicAbsenteeismCount: 111,
        ChronicAbsenteeismRate: 9.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2040,
        ChronicAbsenteeismCount: 167,
        ChronicAbsenteeismRate: 8.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 34754,
        ChronicAbsenteeismCount: 2279,
        ChronicAbsenteeismRate: 6.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 36776,
        ChronicAbsenteeismCount: 2445,
        ChronicAbsenteeismRate: 6.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 24622,
        ChronicAbsenteeismCount: 4899,
        ChronicAbsenteeismRate: 19.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 27231,
        ChronicAbsenteeismCount: 5327,
        ChronicAbsenteeismRate: 19.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 2638,
        ChronicAbsenteeismCount: 437,
        ChronicAbsenteeismRate: 16.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 6220,
        ChronicAbsenteeismCount: 775,
        ChronicAbsenteeismRate: 12.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 39181,
        ChronicAbsenteeismCount: 6435,
        ChronicAbsenteeismRate: 16.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 45340,
        ChronicAbsenteeismCount: 7195,
        ChronicAbsenteeismRate: 15.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 738,
        ChronicAbsenteeismCount: 361,
        ChronicAbsenteeismRate: 48.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 83,
        ChronicAbsenteeismCount: 32,
        ChronicAbsenteeismRate: 38.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 655,
        ChronicAbsenteeismCount: 328,
        ChronicAbsenteeismRate: 50.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 3279,
        ChronicAbsenteeismCount: 1404,
        ChronicAbsenteeismRate: 42.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 3028,
        ChronicAbsenteeismCount: 1325,
        ChronicAbsenteeismRate: 43.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 254,
        ChronicAbsenteeismCount: 81,
        ChronicAbsenteeismRate: 31.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 903,
        ChronicAbsenteeismCount: 79,
        ChronicAbsenteeismRate: 8.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 898,
        ChronicAbsenteeismCount: 79,
        ChronicAbsenteeismRate: 8.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 97306,
        ChronicAbsenteeismCount: 18761,
        ChronicAbsenteeismRate: 19.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 16194,
        ChronicAbsenteeismCount: 2219,
        ChronicAbsenteeismRate: 13.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 81253,
        ChronicAbsenteeismCount: 16582,
        ChronicAbsenteeismRate: 20.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 23364,
        ChronicAbsenteeismCount: 2720,
        ChronicAbsenteeismRate: 11.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 201877,
        ChronicAbsenteeismCount: 22456,
        ChronicAbsenteeismRate: 11.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 1,
        CountyName: "Alameda",
        ChronicAbseentismEligibleCumulative: 225050,
        ChronicAbsenteeismCount: 25126,
        ChronicAbsenteeismRate: 11.2
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1908,
        ChronicAbsenteeismCount: 17,
        ChronicAbsenteeismRate: 0.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1908,
        ChronicAbsenteeismCount: 17,
        ChronicAbsenteeismRate: 0.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 2112,
        ChronicAbsenteeismCount: 13,
        ChronicAbsenteeismRate: 0.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 2112,
        ChronicAbsenteeismCount: 13,
        ChronicAbsenteeismRate: 0.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 784,
        ChronicAbsenteeismCount: 4,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 784,
        ChronicAbsenteeismCount: 4,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 932,
        ChronicAbsenteeismCount: 5,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 932,
        ChronicAbsenteeismCount: 5,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 706,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 0.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 706,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 0.4
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1367,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 1.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1367,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 1.1
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 2656,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 0.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 2656,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 0.6
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 234,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 1.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 234,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 1.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1225,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1225,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 0.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 24,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 24,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 18,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 18,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 79,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 79,
        ChronicAbsenteeismCount: 0,
        ChronicAbsenteeismRate: 0
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 471,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 1.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 471,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 1.3
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 418,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 0.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 418,
        ChronicAbsenteeismCount: 3,
        ChronicAbsenteeismRate: 0.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1785,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 0.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 1785,
        ChronicAbsenteeismCount: 15,
        ChronicAbsenteeismRate: 0.8
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 371,
        ChronicAbsenteeismCount: 18,
        ChronicAbsenteeismRate: 4.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 371,
        ChronicAbsenteeismCount: 18,
        ChronicAbsenteeismRate: 4.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 135,
        ChronicAbsenteeismCount: 2,
        ChronicAbsenteeismRate: 1.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 135,
        ChronicAbsenteeismCount: 2,
        ChronicAbsenteeismRate: 1.5
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 208,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 2.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 208,
        ChronicAbsenteeismCount: 6,
        ChronicAbsenteeismRate: 2.9
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 4023,
        ChronicAbsenteeismCount: 30,
        ChronicAbsenteeismRate: 0.7
    },
    {  
        AcademicYear: "2020-21",
        AggregateLevel: 19,
        CountyName: "La Canada",
        ChronicAbseentismEligibleCumulative: 4023,
        ChronicAbsenteeismCount: 30,
        ChronicAbsenteeismRate: 0.7
    },


]

// all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send(users);
} );

router.post('/',(req,res) => {

    const user = req.body;

    users.push(user);

    res.send(`District with the academic year of ${user.AcademicYear} added to the database!`);
});

router.get('/moreinfo',(req, res) => {
    res.send('More absenteeism information here:')
});

export default router;