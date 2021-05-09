const exchangeData = {
        BTCtoUSD: 58612,
        GBPtoUSD: 1.39093,
        SATSinBTC: 100000000
    };


//source: https://tradingeconomics.com/country-list/money-supply-m2
const fiatShitcoinData = [
    {
        name: 'Chinese Yuan Renminmbi',
        code: 'CNY',
        priceInUSD: 0.155484,
        M2: 227650,
        supplyUnitOfAccount: 'CNY Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    }, 
    {
        name: 'United States Dollar',
        code: 'USD',
        priceInUSD: 1,
        M2: 19896,
        supplyUnitOfAccount: 'USD Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Euro',
        code: 'EUR',
        priceInUSD: 1.21636,
        M2: 14007950,
        supplyUnitOfAccount: 'EUR Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Japanese Yen',
        code: 'JPY',
        priceInUSD: 0.00921102,
        M2: 1144326,
        supplyUnitOfAccount: 'JPY Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Pound Sterling',
        code: 'GBP',
        priceInUSD: 1.39893,
        M2: 2862773,
        supplyUnitOfAccount: 'GBP Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'South Korean Won',
        code: 'KRW',
        priceInUSD: 0.000899253,
        M2: 3267578,
        supplyUnitOfAccount: 'KRW Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-02-28T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Indian Rupee',
        code: 'INR',
        priceInUSD: 0.0136380,
        M2: 47554,
        supplyUnitOfAccount: 'INR Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-02-28T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Canadian Dollar',
        code: 'CAD',
        priceInUSD:  0.824788,
        M2: 2177359,
        supplyUnitOfAccount: 'CAD Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-02-28T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Hong Kong Dollar',
        code: 'HKD',
        priceInUSD: 0.128771,
        M2: 15760021,
        supplyUnitOfAccount: 'HKD Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Australian Dollar',
        code: 'AUD',
        priceInUSD: 0.784365,
        M2: 0,
        supplyUnitOfAccount: '',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'New Taiwan Dollar',
        code: 'TWD',
        priceInUSD: 0.0359029,
        M2: 50920293,
        supplyUnitOfAccount: 'TWD Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Brazillian Real',
        code: 'BRL',
        priceInUSD: 0.191060,
        M2: 3906046,
        supplyUnitOfAccount: 'BRL Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Swiss Franc',
        code: 'CHF',
        priceInUSD: 1.11058,
        M2: 1088347,
        supplyUnitOfAccount: 'CHF Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Russian Ruble',
        code: 'RUB',
        priceInUSD: 0.0135601,
        M2: 58262,
        supplyUnitOfAccount: 'RUB Billion',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Thai Baht',
        code: 'THB',
        priceInUSD: 0.0321906,
        M2: 0,
        supplyUnitOfAccount: '',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Mexican Peso',
        code: 'MXN',
        priceInUSD: 0.0502490,
        M2: 10509325648,
        supplyUnitOfAccount: 'MXN Thousand',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Saudi Riyal',
        code: 'SAR',
        priceInUSD: 0.266667,
        M2: 1972361,
        supplyUnitOfAccount: 'SAR Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Singapore Dollar',
        code: 'SGD',
        priceInUSD: 0.754710,
        M2: 730572,
        supplyUnitOfAccount: 'SGD Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Swedish Krona',
        code: 'SEK',
        priceInUSD: 0.120393,
        M2: 4336988,
        supplyUnitOfAccount: 'SEK Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    },
    {
        name: 'Malaysian Ringgit',
        code: 'MYR',
        priceInUSD: 0.243180,
        M2: 2083781,
        supplyUnitOfAccount: 'MYR Million',
        maxSupplyInUSD: 'infinite',
        symbol: '',
        datetime: '2021-03-31T12:00:00',
        smallestDenominationName: '',
        smallestDenominationUnits: 0,
        genesisDate: '',
        informationNotes: [],
        logo: ''
    }
];

export default {
    exchangeData, fiatShitcoinData
}