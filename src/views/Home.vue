<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm6>
                    <h2>The purchasing power of your Sats</h2>
                        <p class="body-2">There are 100 million Satoshis to a Bitcoin. When people no longer have any trust in government issued fiat shitcoins, we may see Sats becoming a globally accepted standard <strong>unit of account</strong> so that talking about the value of things in Sats may be commonplace in the not too distant future.</p>
                    </v-flex>
            </v-layout>
        </v-container>
        <v-container  class="mt-10">
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
                    <p class="body-2">A selection of everyday and aspirational goods and services to asses the purchasing power of your Sats.</p>
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
                                                <v-flex xs5 sm4 md3 lg3>
                                        <v-avatar size="32" tile>
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
    </div>
</template>

<script>
import basket from '../data/basket.js'
import exchange from '../data/exchange.js'
import formatCurrency from 'format-currency'

  export default {
    data: () => ({
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