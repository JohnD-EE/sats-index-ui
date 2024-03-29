<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8>
                <h2>Fiat Shitcoin</h2>
                    <p class="body-1"><span class="font-italic">"The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve."</span>
                    <span class="font-weight-medium"> - Satoshi Nakamoto, P2P Foundation forum, Feb 2009</span></p>
                    <p class="body-1"><span class="font-italic">"How did you go bankrupt? Two ways. Gradually, then suddenly."</span>
                    <span class="font-weight-medium"> - Ernest Hemingway, The Sun Also Rises</span></p>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container  class="mt-10 mb-15">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-sheet
                    color="grey lighten-4"
                    elevation="3"
                    outlined
                    tile
                    >
                    <div class="pa-5">
                    <h5 class="">What if the economy collapses, sending us to hell in a handbasket? Bitcoin fixes this.</h5>
                    <p class="body-2">A selection of 'not-yet-worthless' government ordained 'funny money' priced in Sats and BTC. Bitcoin is helping people to understand the concept of sound money by comparing its 21 Million capped supply with government fiat currencies that can be inflated and debased through money printing. Our legacy systems of money are broken.</p>
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
                                                :src="item.displayFlag" 
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
                                            <i class="fak fa-satoshisymbol-solid mr-1"></i>{{ item.priceInSats }} Sats
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

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8 offset-sm-2>
                    <h3>Things to Ponder:</h3>
                    <p>What can we learn by comparing Bitcoin to Fiat Shitcoin?</p>
                    </v-flex>
            </v-layout>
        </v-container>

        <app-lessons 
            :lessons = "lessons">
        </app-lessons>

    </div>
</template>

<script>
import exchange from '../data/exchange.js'
import zillions from '../data/zillions.js'
import formatCurrency from 'format-currency'
import lessonsComponent from './../components/Lessons.vue'
import lessonsFiat from '../data/lessonsFiat.js'

  export default {
    data: () => ({
        trillion: 1000000000000,
        formatCurrency: formatCurrency,
        wordsToNumbers: zillions.wordsToNumbers,
        exchangeData: exchange.exchangeData,
        fiatShitcoinData: exchange.fiatShitcoinData,        
        lessonsFiat: lessonsFiat,
        headers: [
            { text: 'Currency',  align: 'start', sortable: false, value: 'name' },
            { text: 'Price of one unit in Sats/USD', align: 'end', sortable: false, value: 'priceInSats', symbol: '&sect;' },
            { text: 'M2 Market Cap in BTC/USD', align: 'end', sortable: false, value: 'marketCapM2InUSD', symbol: '&dollar;' },
            { text: 'Circulating Supply', align: 'end', sortable: false, value: 'circulatingSupply' },
            { text: 'Max Supply', align: 'end', sortable: false, value: 'maxSupply' }, 
            { text: 'Date', align: 'end', sortable: false, value: 'datetime' }
        ]
    }),
    components: {
        'app-lessons': lessonsComponent
    },
    computed: {
        lessons () {
            let lessons = this.lessonsFiat.lessons
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
                if (item.flag) {
                fiatShitcoinData[i].displayFlag = `./images/flags/${item.flag}.png`
                }
            })
            return fiatShitcoinData
        }
    }
  }
  </script>