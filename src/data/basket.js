/*
Template:
    {
        name: '',
        currency: '',
        price: ,
        source: '',
        datetime: ''
    },
*/

const basketItems = [
    {
        name: 'Kindess, love and joy',
        currency: 'GBP',
        price: 0,
        source: 'Free... Be excelent to each other',
        sourceLink: '',
        datetime: '0000-00-00T12:00:00'
    },
    {
        name: 'An Apple',
        currency: 'GBP',
        price: 30,
        source: 'A single Granny Smith\'s apple from Sainsbury\'s',
        sourceLink: 'https://www.sainsburys.co.uk/gol-ui/Product/sainsburys-granny-smith-apples-single-c',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'Loaf of Bread',
        currency: 'GBP',
        price: 109,
        source: 'RPI Average, White loaf sliced, 800g',
        sourceLink: 'https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/czoh/mm23',
        datetime: '2021-03-01T12:00:00'
    },
    {
        name: '1 pint of milk',
        currency: 'GBP',
        price: 50,
        source: 'A pint of semi-skimmed from Tesco',
        sourceLink: 'https://www.tesco.com/groceries/en-GB/products/251314158',
        datetime: '2021-05-04T12:00:00'
    },
    {
        name: 'Bottle of Coke',
        currency: 'USD',
        price: 134,
        source: 'A single 12 Fl. Oz. CocaCola from Walmart',
        sourceLink: 'https://www.walmart.com/ip/Coca-Cola-Soda-12-Fl-Oz/16940377',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'A Caffè Latte',
        currency: 'USD',
        price: 365,
        source: 'Grande Caffè Latte from Starbucks, USA',
        sourceLink: 'https://www.fastfoodmenuprices.com/starbucks-prices/',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'Big Mac',
        currency: 'USD',
        price: 566,
        source: 'Burgernomics: A Big Mac in the USA',
        sourceLink: 'https://www.economist.com/big-mac-index',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'A Gallon of Gasoline',
        currency: 'USD',
        price: 290,
        source: 'Average cost of Regular Unleaded',
        sourceLink: 'https://gasprices.aaa.com/',
        datetime: '2021-01-01T00:00:00'
    },
    {
        name: 'A pint of beer',
        currency: 'GBP',
        price: 386,
        source: 'Average cost of a pint in the UK',
        sourceLink: 'https://www.finder.com/uk/international-pint-price-map',
        datetime: '2021-01-01T00:00:00'
    },
    {
        name: '2 Large Pizzas',
        currency: 'USA',
        price: 4500,
        source: '2 Papa John\'s Pizzas in honour of Laszlo Hanyecz, Jacksonville FLorida',
        sourceLink: '',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'A bag of weed',
        currency: 'USA',
        price: 4075,
        source: 'Eigth of an ounce of Marijuana (derived from $326 average)',
        sourceLink: 'https://oxfordtreatment.com/substance-abuse/marijuana/average-cost-of-marijuana/',
        datetime: '2020-09-15T12:00:00'
    },
    {
        name: 'Netflix',
        currency: 'USA',
        price: 1399,
        source: 'Monthly Subscription to the Standard package',
        sourceLink: 'https://help.netflix.com/en/node/24926/us',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'Amazon Prime',
        currency: 'USA',
        price: 11900,
        source: 'Yearly Subscription to Amazon Prime',
        sourceLink: 'https://www.amazon.com/gp/prime/pipeline/partner_landing',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: '1 Bitcoin',
        currency: 'BTC',
        price: 1,
        source: 'The price of 1 Bitcoin',
        sourceLink: 'https://bitcoin.org/',
        datetime: ''
    },
    {
        name: 'Gold',
        currency: 'USD',
        price: 178655,
        source: 'An ounce of Gold',
        sourceLink: 'https://www.bullionvault.com/gold-price-chart.do',
        datetime: '2021-05-04T12:00:00'
    },
    {
        name: 'Tesla Model S',
        currency: 'USD',
        price: 7999000,
        source: 'Dual Motor All-Wheel Drive Long Range',
        sourceLink: 'https://www.tesla.com/models/design#overview',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'Lambo',
        currency: 'USD',
        price: 42132100,
        source: '2021 Lamborghini Aventador',
        sourceLink: 'https://www.caranddriver.com/lamborghini/aventador',
        datetime: '2021-05-03T12:00:00'
    },
    {
        name: 'A UK House',
        currency: 'GBP',
        price: 28600000,
        source: 'Average price of a house in the UK',
        sourceLink: 'https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/housepriceindex/february2021',
        datetime: '2021-01-01T12:00:00'
    }
]

export default {
    basketItems
}