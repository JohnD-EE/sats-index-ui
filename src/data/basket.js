/*
Template:
    {
        name: '',
        currency: '',
        price: ,
        source: '',
        sourceLink: '',
        datetime: '',
        logo: ''
    },
*/

const basketItems = [
    {
        name: 'Peace, love and kindness',
        currency: 'BTC',
        price: 0,
        source: 'Totally free! Be excellent to each other',
        sourceLink: '',
        datetime: 'Forever',
        logo: 'orangeHeart.png'
    },
    {
        name: 'An Apple',
        currency: 'GBP',
        price: 30,
        source: 'A single Granny Smith\'s apple from Sainsbury\'s',
        sourceLink: 'https://www.sainsburys.co.uk/gol-ui/Product/sainsburys-granny-smith-apples-single-c',
        datetime: '2021-05-03T12:00:00',
        logo: 'greenAppleLogo.png'
    },
    {
        name: 'Loaf of Bread',
        currency: 'GBP',
        price: 109,
        source: 'RPI Average, White loaf sliced, 800g',
        sourceLink: 'https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/czoh/mm23',
        datetime: '2021-03-01T12:00:00',
        logo: 'breadLogo.png'
    },
    {
        name: '1 pint of milk',
        currency: 'GBP',
        price: 50,
        source: 'A pint of semi-skimmed from Tesco',
        sourceLink: 'https://www.tesco.com/groceries/en-GB/products/251314158',
        datetime: '2021-05-04T12:00:00',
        logo: 'milkLogo.png'
    },
    {
        name: 'Bottle of Coke',
        currency: 'USD',
        price: 134,
        source: 'A single 12 Fl. Oz. CocaCola from Walmart',
        sourceLink: 'https://www.walmart.com/ip/Coca-Cola-Soda-12-Fl-Oz/16940377',
        datetime: '2021-05-03T12:00:00',
        logo: 'cocaColaLogo.png'
    },
    {
        name: 'A Caffè Latte',
        currency: 'USD',
        price: 365,
        source: 'Grande Caffè Latte from Starbucks, USA',
        sourceLink: 'https://www.fastfoodmenuprices.com/starbucks-prices/',
        datetime: '2021-05-03T12:00:00',
        logo: 'starbucksLogo.png'
    },
    {
        name: 'Big Mac',
        currency: 'USD',
        price: 566,
        source: 'Burgernomics: A Big Mac in the USA',
        sourceLink: 'https://www.economist.com/big-mac-index',
        datetime: '2021-05-03T12:00:00',
        logo: 'mcDonaldsLogo.png'
    },
    {
        name: 'A Gallon of Gasoline',
        currency: 'USD',
        price: 290,
        source: 'Average cost of Regular Unleaded',
        sourceLink: 'https://gasprices.aaa.com/',
        datetime: '2021-01-01T00:00:00',
        logo: 'gasPumpLogo.png'
    },
    {
        name: 'A pint of beer',
        currency: 'GBP',
        price: 386,
        source: 'Average cost of a pint in the UK',
        sourceLink: 'https://www.finder.com/uk/international-pint-price-map',
        datetime: '2021-01-01T00:00:00',
        logo: 'pintBeerLogo.png'
    },
    {
        name: '2 large pizzas',
        currency: 'USD',
        price: 4500,
        source: '2 Papa John\'s Pizzas in honour of Laszlo Hanyecz',
        sourceLink: '',
        datetime: '2021-05-03T12:00:00',
        logo: 'papaJohnsLogo.png'
    },
    {
        name: 'A bag of weed',
        currency: 'USD',
        price: 4075,
        source: 'Eigth of an ounce of Marijuana (derived from $326 average for one ounce)',
        sourceLink: 'https://oxfordtreatment.com/substance-abuse/marijuana/average-cost-of-marijuana/',
        datetime: '2020-09-15T12:00:00',
        logo: 'weedLogo.png'
    },
    {
        name: 'Netflix',
        currency: 'USD',
        price: 1399,
        source: 'Monthly Subscription to the Standard package',
        sourceLink: 'https://help.netflix.com/en/node/24926/us',
        datetime: '2021-05-03T12:00:00',
        logo: 'netflixLogo.png'

    },
    {
        name: 'Afternoon Tea at The Ritz',
        currency: 'GBP',
        price: 5500,
        source: 'One adult at The Ritz, London',
        sourceLink: 'https://www.theritzlondon.com/dine-with-us/afternoon-tea/',
        datetime: '2021-05-03T12:00:00',
        logo: 'theRitzLogo.jpg'
    },
    {
        name: 'Amazon Prime',
        currency: 'USD',
        price: 11900,
        source: 'Yearly Subscription to Amazon Prime',
        sourceLink: 'https://www.amazon.com/gp/prime/pipeline/partner_landing',
        datetime: '2021-05-03T12:00:00',
        logo: 'amazonLogo.png'
    },
    {
        name: 'Gucci Bag',
        currency: 'USD',
        price: 149000,
        source: 'GG Marmont small shoulder bag, pastel pink leather',
        sourceLink: 'https://www.gucci.com/us/en/pr/women/handbags/crossbody-bags-for-women/gg-marmont-small-shoulder-bag-p-447632DTD1Y5815',
        datetime: '2021-05-03T12:00:00',
        logo: 'gucciLogo.png'
    },
    {
        name: 'Xbox Console',
        currency: 'USD',
        price: 49900,
        source: 'Xbox Series X Console',
        sourceLink: 'https://www.xbox.com/en-GB/consoles/xbox-series-x',
        datetime: '2021-05-07T12:00:00',
        logo: 'xboxLogo.png'
    },
    {
        name: 'iPhone 12',
        currency: 'USD',
        price: 79900,
        source: 'Apple iPhone 12 64GB',
        sourceLink: 'https://www.apple.com/shop/buy-iphone/iphone-12',
        datetime: '2021-05-03T12:00:00',
        logo: 'appleLogo.png'
    },
    {
        name: 'Fender Stratocaster',
        currency: 'USD',
        price: 189999,
        source: 'American Ultra Stratocaster Guitar',
        sourceLink: 'https://shop.fender.com/en-US/electric-guitars/stratocaster/american-ultra-stratocaster/0118010712.html',
        datetime: '2021-05-07T12:00:00',
        logo: 'fenderLogo.png'
    },
    {
        name: 'One Bitcoin',
        currency: 'BTC',
        price: 1,
        source: 'The price of 1 Bitcoin',
        sourceLink: 'https://bitcoin.org/',
        datetime: '2009-01-03T12:00:00',
        logo: 'btcLogo.png'
    },
    {
        name: 'Gold',
        currency: 'USD',
        price: 178655,
        source: 'One troy ounce of Gold',
        sourceLink: 'https://www.bullionvault.com/gold-price-chart.do',
        datetime: '2021-05-04T12:00:00',
        logo: 'goldLogo.png'
    },
    {
        name: 'Tesla Model S',
        currency: 'USD',
        price: 7999000,
        source: 'Dual Motor All-Wheel Drive Long Range',
        sourceLink: 'https://www.tesla.com/models/design#overview',
        datetime: '2021-05-03T12:00:00',
        logo: 'teslaLogo.png'
    },
    {
        name: 'Lambo',
        currency: 'USD',
        price: 42132100,
        source: '2021 Lamborghini Aventador',
        sourceLink: 'https://www.caranddriver.com/lamborghini/aventador',
        datetime: '2021-05-03T12:00:00',
        logo: 'lamboLogo.png'
    },
    {
        name: 'A UK House',
        currency: 'GBP',
        price: 28600000,
        source: 'Average price of a house in the UK',
        sourceLink: 'https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/housepriceindex/february2021',
        datetime: '2021-01-01T12:00:00',
        logo: 'houseLogo.png'
    },
    {
        name: 'Bitcoin Block Reward',
        currency: 'BTC',
        price: 6.25,
        source: 'Reward for mining a Bitcoin block since the last halving',
        sourceLink: 'https://en.bitcoin.it/wiki/Controlled_supply',
        datetime: '2020-05-11T12:00:00',
        logo: 'btcLogo.png'
    },
    {
        name: 'SatsIndex.com',
        currency: 'BTC',
        price: 25,
        source: 'The satsindex.com domain and assets',
        sourceLink: '',
        internalLink: '/offer',
        internalLinkText: 'Get it while it\'s cheap!',
        datetime: '2021-05-04T12:00:00',
        logo: 'satsLogo.png'
    },
    {
        name: 'Luxury Yacht',
        currency: 'USD',
        price: 14500000000,
        source: 'Illusion Plus, the swankiest yacht we could find',
        sourceLink: 'https://www.bluewateryachting.com/yacht-for-sale/illusion-plus-14555',
        datetime: '2021-05-08T12:00:00',
        logo: 'yachtLogo.png'
    },
]

export default {
    basketItems
}