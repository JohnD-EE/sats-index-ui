<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm9 md6>
                    <h2>The purchasing power of your Sats</h2>
                    <p class="body-2">If Bitcoin continues its adoption path as the soundest form of money on the planet, people will want to know the price of everyday goods and services in Sats (Satoshis), the smallest denomination of a bitcoin.</p>
                    <p class="body-2">There are 100 million Satoshis to a Bitcoin. When people no longer have any trust in government issued fiat shitcoins, we may see Sats becoming the widely accepted <strong>unit of account</strong>.</p>  
                </v-flex>
            </v-layout>
        </v-container>
        <v-container  class="mt-10">
            <v-layout row wrap>
                <v-flex xs12 class="mb-3">
                    <h3 class="text-center">A basket of goods and services</h3>
                    <p class="body-2 text-center">A selection of well known goods and services to asses the purchasing power of your Sats.</p>
                </v-flex>
                <v-flex xs12>
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                            class="elevation-1"
                            hide-default-footer
                            :items-per-page="100"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td width="{ item.width }">
                                        <v-container>
                                            <v-layout row>
                                                <v-flex xs5 sm4 md3 lg3>
                                        <v-avatar size="36">
                                            <img 
                                                :src="item.logoSource" 
                                                alt="Brand Logo"
                                                >
                                                </v-avatar>
                                                </v-flex>
                                                <v-flex xs7 sm8 md9 lg9>
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
                                            {{ formatCurrency(item.sats, { format: '%v %c', code: 'Sats', minFraction: 0, maxFraction: 0 }) }}
                                        </span>
                                        </div>
                                        <div>
                                            <span class="font-weight-light">
                                            {{ formatCurrency(item.btc, { format: '%v %c', code: 'BTC', minFraction: 0, maxFraction: 8 }) }}
                                        </span>
                                            </div>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            {{ formatCurrency( (item.usd / 100), { format: '%s%v', symbol: '$' }) }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            {{ formatCurrency( (item.gbp / 100), { format: '%s%v', symbol: '£' }) }}
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
                                    </td>
                                    <td class="text-right caption">
                                        {{ item.datetime | moment("MMM Do YYYY") }}
                                    </td>
                                </tr>
                                   
                                </template>
                        </v-data-table>
                        
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import basket from '../data/basket.js'
import formatCurrency from 'format-currency'

  export default {
    data: () => ({
        formatCurrency: formatCurrency,
        BTCtoUSD: 59116,
        GBPtoUSD: 1.39093,
        SATSinBTC: 100000000,
        basketItems: basket.basketItems,
      headers: [
        { text: 'Item', width: "24%", align: 'start', sortable: false, value: 'name' },
        { text: 'Sats / BTC Price', align: 'end', sortable: false, value: 'price', symbol: '&sect;' },
        { text: 'USD Price', align: 'end', sortable: false, value: 'price', symbol: '&dollar;' },
        { text: 'GBP Price', align: 'end', sortable: false, value: 'price', symbol: '£' },
        { text: 'Description and Source', align: 'end', sortable: false, value: 'source' },
        { text: 'Date', align: 'end', sortable: false, value: 'datetime' }
      ]
    }),
    computed: {
        items () {
            let basketItems = this.basketItems
            basketItems.forEach((item, i) => {
                if (item.currency === 'GBP') {
                    basketItems[i].gbp = item.price
                    basketItems[i].usd = item.price * this.GBPtoUSD
                    basketItems[i].btc = (basketItems[i].usd /100) / this.BTCtoUSD
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                } else if (item.currency === 'USD') {
                    basketItems[i].gbp = item.price / this.GBPtoUSD
                    basketItems[i].usd = item.price
                    basketItems[i].btc = (item.price / 100) / this.BTCtoUSD
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                } else if (item.currency === 'BTC') {                    
                    basketItems[i].usd = (item.price * 100) * this.BTCtoUSD
                    basketItems[i].gbp = basketItems[i].usd / this.GBPtoUSD
                    basketItems[i].btc = item.price
                    basketItems[i].sats = basketItems[i].btc * this.SATSinBTC
                }
                if (item.logo) {
                    basketItems[i].logoSource = require('../assets/brandLogos/' + item.logo)
                }
            }
        )
        return basketItems
        }
    }
  }
</script>