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
                            :items="basketItems"
                            item-key="name"
                            class="elevation-1"
                            hide-default-footer
                            items-per-page="100"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td width="{ item.width }">
                                        <span  class="font-weight-medium">
                                            {{ item.name }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            &sect;{{ utilitiesHelper.commaNumber(item.price, 0) }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            &#8383;{{ utilitiesHelper.commaNumber(item.price, 8) }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            &dollar;{{ utilitiesHelper.commaNumber(item.price, 2) }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            &pound;{{ utilitiesHelper.commaNumber(item.price, 2) }}
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
import utilitiesHelper from '../helpers/utilities.js'

  export default {
    data: () => ({
        utilitiesHelper: utilitiesHelper,
        BTCinUSD: 57518,
        GBPtoUSD: 1.39093,
        SATSinBTC: 100000000,
        basketItems: basket.basketItems,
      headers: [
        { text: 'Item', width: "15%", align: 'start', sortable: false, value: 'name' },
        { text: 'Sats Price', align: 'end', sortable: false, value: 'price', symbol: '&sect;' },
        { text: 'BTC Price', align: 'end', sortable: false, value: 'price', symbol: '&#8383;' },
        { text: 'USD Price', align: 'end', sortable: false, value: 'price', symbol: '&dollar;' },
        { text: 'GBP Price', align: 'end', sortable: false, value: 'price', symbol: '£' },
        { text: 'Description and Source', align: 'end', sortable: false, value: 'source' },
        { text: 'Date', align: 'end', sortable: false, value: 'datetime' }
      ]
    })
  }
</script>