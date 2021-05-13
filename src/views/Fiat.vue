<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <h2>Fiat Shitcoin</h2>
                </v-flex>
                <v-flex xs12>
                    <p class="body-2">The not-yet-worthless government ordained currencies. Fiat always goes to zero.</p>
                    <p class="body-2">Our systems of money are broken. Bitcoin fixes this. What if society collapses and the economy goes to hell in a handbasket</p>
                </v-flex>
                <p>Fiat as funny money - propping up an unsustainable system</p>
                <p>central banks collectively representing a fifth of the world’s population are
likely to issue a general purpose CBDC in the next three years. https://www.bis.org/publ/bppdf/bispap114.pdf Bank of International Settlements.
</p>
<p>CBDC of fiat legacy money is like putting lipstick on a pig according to Pomp - https://pomp.substack.com/p/central-bank-digital-currencies-are</p>
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
                    <p class="body-2">A selection of everyday and aspirational goods, services and other benchmarks to assess the purchasing power of your Sats.</p>
                </div>
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                            :sort-desc="[false, true]"
                            hide-default-footer
                            :items-per-page="100"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td width="">
                                        <v-container>
                                            <v-layout row>
                                                <v-flex xs6 sm4 md3 lg3>
                                        <v-avatar size="28" tile>
                                            <img 
                                                :src="item.flag" 
                                                alt="Flag"
                                                >
                                                </v-avatar>
                                                </v-flex>
                                                <v-flex xs6 sm8 md9 lg9>
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
                                            {{ item.priceInSats }} Sats
                                        </span>
                                        </div>
                                        <div>
                                            <span class="font-weight-light">
                                            ${{ item.priceInUSD }}
                                        </span>
                                            </div>
                                    </td>
                                    <td class="text-right">
                                        <div>
                                            <span class="font-weight-medium">
                                            {{ item.formattedMarketCapM2InBTC }}
                                            </span>
                                        </div>
                                        <div>
                                            <span class="font-weight-light">
                                            {{ item.formattedMarketCapM2InUSD }}
                                        </span>
                                            </div>
                                    </td>
                                    <td class="text-right">
                                        <span class="font-weight-medium">
                                            {{ item.circulatingSupply }}
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <div>
                                            <span v-if="item.maxSupply === 'Infinite'">&#8734; </span>{{ item.maxSupply }}
                                        </div>
                                    </td>
                                    <td class="text-right caption">
                                        {{ item.datetime | moment("MMM YYYY") }}
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
import exchange from '../data/exchange.js'
import zillions from '../data/zillions.js'
import formatCurrency from 'format-currency'

  export default {
    data: () => ({
        trillion: 1000000000000,
        formatCurrency: formatCurrency,
        wordsToNumbers: zillions.wordsToNumbers,
        exchangeData: exchange.exchangeData,
        fiatShitcoinData: exchange.fiatShitcoinData,
        headers: [
            { text: 'Currency',  align: 'start', sortable: false, value: 'name' },
            { text: 'Price of one unit in Sats/USD', align: 'end', sortable: false, value: 'priceInSats', symbol: '&sect;' },
            { text: 'M2 Market Cap in BTC/USD', align: 'end', sortable: false, value: 'marketCapM2InUSD', symbol: '&dollar;' },
            { text: 'Circulating Supply', align: 'end', sortable: false, value: 'circulatingSupply' },
            { text: 'Max Supply', align: 'end', sortable: false, value: 'maxSupply' }, 
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
            let fiatShitcoinData = this.fiatShitcoinData
            fiatShitcoinData.forEach((item, i) => {
                //calculate price in Sats
                fiatShitcoinData[i].priceInSats = Math.round((item.priceInUSD / this.BTCtoUSD) * this.SATSinBTC)
                let supplyUnitsWord = item.supplyUnitOfAccount
                let supplyUnitsNumber = 0
                if (supplyUnitsWord === 'Thoushand') {
                    supplyUnitsNumber = this.wordsToNumbers.thousand
                } else if (supplyUnitsWord === 'Million') {
                    supplyUnitsNumber = this.wordsToNumbers.million
                } else if (supplyUnitsWord === 'Billion') {
                    supplyUnitsNumber = this.wordsToNumbers.billion
                } else if (supplyUnitsWord === 'Trillion') {
                    supplyUnitsNumber = this.wordsToNumbers.trillion
                }
                fiatShitcoinData[i].marketCapM2InUSD = Math.round((item.M2 * item.priceInUSD) * supplyUnitsNumber)
                fiatShitcoinData[i].formattedMarketCapM2InUSD = formatCurrency((fiatShitcoinData[i].marketCapM2InUSD), {format: '%s%v', symbol: '$', minFraction: 0, maxFraction: 0 })
                fiatShitcoinData[i].marketCapM2InBTC = Math.round(fiatShitcoinData[i].marketCapM2InUSD / this.BTCtoUSD)
                fiatShitcoinData[i].formattedMarketCapM2InBTC = formatCurrency(fiatShitcoinData[i].marketCapM2InBTC, {format: '%v %c', code: 'BTC', minFraction: 0, maxFraction: 0 })
                fiatShitcoinData[i].circulatingSupply = formatCurrency(item.M2*supplyUnitsNumber, { format: '%v %c', code: item.code, minFraction: 0, maxFraction: 0 })
                fiatShitcoinData[i].flag = require(`../assets/flags/${item.flag}.png`)
            })
            return fiatShitcoinData
        }
    }
  }
  </script>