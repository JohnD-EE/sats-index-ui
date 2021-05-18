<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8>
                    <h2>The purchasing power of your Sats</h2>
                    <p class="body-1">How divisible are bitcoins...? <span class="font-italic">"Eventually at most only 21 million coins for 6.8 billion people in the world if it really gets huge. But don't worry, there are... a total of 8 decimal places internally..."</span>
                        <span class="font-weight-medium"> - Satoshi Nakamoto, Bitcoin Talk, 6th Feb 2010</span></p>
                         </v-flex>
            </v-layout>
        </v-container>
        <v-container  class="mt-10 mb-10">
            <v-layout row wrap>
                
                <v-flex xs12>
                    <v-sheet
                    color="grey lighten-4"
                    elevation="3"
                    outlined
                    tile
>
                    <div class="pa-5">
                    <h5 class="">A basket of goods and services</h5>
                    <p class="body-2">A selection of everyday and aspirational goods, services and other benchmarks to assess the purchasing power of your Sats.</p>
                </div>
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                            class="elevation-1 pa-3"
                            :sort-by="['btc']"
                            :sort-desc="[false, true]"
                            hide-default-footer
                            :items-per-page="100"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td width="{ item.width }">
                                        <v-container>
                                            <v-layout row>
                                                <v-flex xs5 sm5 md4 lg3>
                                        <v-avatar size="32" tile>
                                            <img 
                                                :src="item.logoSource" 
                                                alt="Brand Logo"
                                                >
                                                </v-avatar>
                                                </v-flex>
                                                <v-flex xs7 sm7 md8 lg9>
                                            <span  class="font-weight-medium">
                                            {{ item.name }}
                                        </span>
                                        </v-flex>
                                        </v-layout>

                                            </v-container>
                                    </td>
                                    <td class="text-right">
                                        <div>
                                        <span class="font-weight-medium">
                                            {{ item.satsFormatted }}
                                        </span>
                                        </div>
                                        <div>
                                            <span class="font-weight-light">
                                            {{ item.btcFormatted }}
                                        </span>
                                            </div>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            {{ item.usdFormatted }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            {{ item.gbpFormatted }}
                                        </span>
                                    </td>
                                    <td class="text-right caption">
                                        <div>
                                            {{ item.source }}
                                        </div>
                                        <div v-if="item.sourceLink">
                                            <v-btn x-small outlined :href="item.sourceLink" target="_blank">
                                            <span class="font-weight-light">Source</span>
                                            <v-icon small class="ml-1">
                                                mdi-open-in-new
                                            </v-icon>
                                            </v-btn>
                                        </div>
                                        <div v-if="item.internalLink">
                                            <v-btn x-small outlined :href="item.internalLink">
                                            <span class="font-weight-light">{{ item.internalLinkText }}</span>
                                            
                                            </v-btn>
                                            </div>
                                    </td>
                                    <td class="text-right caption">
                                        {{ item.datetime | moment("MMM Do YYYY") }}
                                    </td>
                                </tr>
                                   
                                </template>
                        </v-data-table>
                        
                    </template>
                    
                </v-sheet>

                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm9>
                    <h3>What can we learn from this?</h3>
                    <p>Here we will have some learning points about the fundamentals of money as a unit of account and what free market price discovery tells us about the relative value of things.</p>
                    <p class="body-1 mt-15">Thanks to Satoshi, there are 100 million Sats to a Bitcoin to give a capped supply of 2.1 Quadrillion Satoshis. When people no longer have any trust in government issued fiat shitcoins, and the world is denominated in Bitcoin, we may see Sats becoming a globally accepted standard <strong>unit of account</strong>.
                    <p>Talking about the value of things in Sats may be commonplace in the not too distant future.</p>
                    </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import basket from '../data/basket.js'
import exchange from '../data/exchange.js'
import formatCurrency from 'format-currency'

  export default {
    data: () => ({
        trillion: 1000000000000,
        billion: 1000000000,
        formatCurrency: formatCurrency,
        exchangeData: exchange.exchangeData,
        basketItems: basket.basketItems,
      headers: [
        { text: 'Item',  align: 'start', sortable: false, value: 'name' },
        { text: 'Sats / BTC Price', align: 'end', value: 'btc', symbol: '&sect;' },
        { text: 'USD Price', align: 'end', sortable: false, value: 'usd', symbol: '&dollar;' },
        { text: 'GBP Price', align: 'end', sortable: false, value: 'gbp', symbol: '£' },
        { text: 'Description and Source', width: "29%", align: 'end', sortable: false, value: 'source' },
        { text: 'Date', align: 'end', sortable: false, value: 'datetime' }
      ]
    }),
    computed: {
        BTCtoUSD () {
            return this.exchangeData.BTCtoUSD
        },
        GBPtoUSD () {
            return this.exchangeData.GBPtoUSD
        },
        SATSinBTC () {
            return this.exchangeData.SATSinBTC
        },
        items () {
            let basketItems = this.basketItems
            basketItems.forEach((item, i) => {
                if (item.currency === 'GBP') {
                    basketItems[i].gbp = item.price
                    basketItems[i].usd = item.price * this.GBPtoUSD
                    basketItems[i].btc = (basketItems[i].usd /100) / this.BTCtoUSD
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                    if ((basketItems[i].btc) > 1) {
                        basketItems[i].btc = Math.round(basketItems[i].btc * 100) / 100
                    }
                    if ((basketItems[i].btc) > 100) {
                        basketItems[i].btc = Math.round(basketItems[i].btc)
                    }
                    basketItems[i].gbpFormatted = formatCurrency((basketItems[i].gbp / 100), { format: '%s%v', symbol: '£' })
                } else if (item.currency === 'USD') {
                    basketItems[i].gbp = item.price / this.GBPtoUSD
                    basketItems[i].usd = item.price
                    basketItems[i].btc = (item.price / 100) / this.BTCtoUSD
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                    if ((basketItems[i].btc) > 1) {
                        basketItems[i].btc = Math.round(basketItems[i].btc * 100) / 100
                    }
                    if ((basketItems[i].btc) > 100) {
                        basketItems[i].btc = Math.round(basketItems[i].btc)
                    }                    
                } else if (item.currency === 'BTC') {                    
                    basketItems[i].usd = (item.price * 100) * this.BTCtoUSD
                    basketItems[i].gbp = basketItems[i].usd / this.GBPtoUSD
                    basketItems[i].btc = item.price
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                    if ((basketItems[i].btc) > 1) {
                        basketItems[i].btc = Math.round(basketItems[i].btc * 100) / 100
                    }
                    if ((basketItems[i].btc) > 100) {
                        basketItems[i].btc = Math.round(basketItems[i].btc)
                    }
                }
                if (item.logo) {
                    //basketItems[i].logoSource = require('../assets/brandLogos/' + item.logo)
                    basketItems[i].logoSource = './images/brandLogos/' + item.logo
                }
            //Formatting Currencies
            if ((basketItems[i].gbp) / 100 > this.trillion) {
                basketItems[i].gbpFormatted = formatCurrency(Math.round((basketItems[i].gbp)/100/this.trillion * 100) / 100, {format: '%s%v%c', symbol: '£', code: 'T', minFraction: 0, maxFraction: 1})
            } else {
                let decimalsGBP = basketItems[i].gbp > 10000 ? 0 : 2
                if (basketItems[i].gbp > 10000) {decimalsGBP = 0} 
                basketItems[i].gbpFormatted = formatCurrency((basketItems[i].gbp / 100), { format: '%s%v', symbol: '£', minFraction: decimalsGBP, maxFraction: decimalsGBP })
            }
            if ((basketItems[i].usd) / 100 > this.trillion) {
                basketItems[i].usdFormatted = formatCurrency(Math.round((basketItems[i].usd)/100/this.trillion * 100) / 100, {format: '%s%v%c', symbol: '$', code: 'T', minFraction: 0, maxFraction: 1}) 
            } else {
                let decimalsUSD = basketItems[i].usd > 10000 ? 0 : 2
                basketItems[i].usdFormatted = formatCurrency((basketItems[i].usd / 100), { format: '%s%v', symbol: '$', minFraction: decimalsUSD, maxFraction: decimalsUSD })
            }
            if (basketItems[i].sats > this.trillion) {
                basketItems[i].satsFormatted = formatCurrency(Math.round(basketItems[i].sats/this.trillion * 100) / 100, {format: '%v%c', code: 'T Sats', minFraction: 0, maxFraction: 1} ) 
            } else {
                basketItems[i].satsFormatted = formatCurrency(basketItems[i].sats, { format: '%v %c', code: 'Sats', minFraction: 0, maxFraction: 0 })
            }
            basketItems[i].btcFormatted = formatCurrency(basketItems[i].btc, { format: '%v %c', code: 'BTC', minFraction: 0, maxFraction: 8 })
            }
        )
        return basketItems
        }
    }
  }
</script>