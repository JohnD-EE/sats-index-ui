<template>
    <div>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12>
                    <h2>The purchasing power of your Sats</h2>
                </v-flex>
                <v-flex xs12>
                    <p class="body-2">If Bitcoin continues its adoption path as the soundest form of money on the planet, people will want to know the price of everyday goods and services in Sats (Satoshis), the smallest denomination of a bitcoin.</p>
                    <p class="body-2">There are 100 million Satoshis to a Bitcoin. When people no longer have any trust in government issued fiat shitcoins, we may see Sats becoming the widely accepted <strong>unit of account</strong>.</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container  class="mt-10">
            <v-layout row wrap>
                <v-flex xs12>
                    <h3>A basket of goods and services</h3>
                </v-flex>
                <v-flex xs12>
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="basketItems"
                            item-key="name"
                            class="elevation-1"
                            hide-default-footer
                        ></v-data-table>
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import basket from '../data/basket.js'

  export default {
    data: () => ({
        BTCinUSD: 57518,
        GBPtoUSD: 1.39093,
        SATSinBTC: 100000000,
        basketItems: basket.basketItems,
      headers: [
        { text: 'Item', width: "15%", align: 'start', sortable: false, value: 'name' },
        { text: 'Sats Price', align: 'end', sortable: false, value: 'price', symbol: '&sect;' },
        { text: 'BTC Price', align: 'end', sortable: false, value: 'price', symbol: '&#8383;' },
        { text: 'USD Price', align: 'end', sortable: false, value: 'price', symbol: '&dollar;' },
        { text: 'GBP Price', align: 'end', sortable: false, value: 'price', symbol: '&pound;' },
        { text: 'Source', align: 'end', sortable: false, value: 'source' },
        { text: 'Date', align: 'end', sortable: false, value: 'datetime' }
      ]
    })
  }
</script>