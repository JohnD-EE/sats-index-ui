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
        <v-container row wrap mt-15>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3>
                    <h3>We're just getting starterd...</h3>
                    <p>This website aims to demistify Bitcoin and entertiain the curious minded by being accessble to Noobs and informatative to OGs. Please come back from time to time as this resource grows...</p>
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
                                            <i class="fak fa-satoshisymbol-solid mr-1"></i>{{ item.satsFormatted }}
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
        

<v-container row mt-5>
            <v-layout>
                
                <v-flex xs12 sm6 offset-sm-3
                    >
                    <div 
                    v-for="(item, i) in lessons"
                    :key="i"
                    class="mt-5 mb-5">
                    <v-card
                    class="mx-auto"
                    >
                        <v-card-text>
                            <v-row>
                            <v-col
                            cols="10"
                            >
                            
                        <p class="headline text--primary">
                            {{ item.name }}
                        </p>
                            </v-col>
                            <v-col
                            cols="2"
                            >
                                
                            </v-col>
                            </v-row>
                        <div v-for="(note, n) in item.notes"
                            :key="n">
                            <p>{{ note }}</p>
                        </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>ADVICE: {{ item.advice }}</v-card-text>
                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
</v-container>

    </div>
</template>

<script>
import basket from '../data/basket.js'
import exchange from '../data/exchange.js'
import formatCurrency from 'format-currency'
import lessonsSats from '../data/lessonsSats.js'

  export default {
    data: () => ({
        trillion: 1000000000000,
        billion: 1000000000,
        formatCurrency: formatCurrency,
        exchangeData: exchange.exchangeData,
        basketItems: basket.basketItems,
        lessonsSats: lessonsSats,
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
        lessons () {
            let lessons = this.lessonsSats.lessons
            /*lessons.forEach((item, i) => {
                //
            })*/
            return lessons
        },
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