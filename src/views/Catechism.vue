<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8>
                    <h2>Bitcoin Catechisms - Combatting FUD</h2>
                    <p class="body-1"><span class="font-italic">"Since 2007. At some point I became convinced there was a way to do this without any trust required at all and couldn't resist to keep thinking about it. Much more of the work was designing than coding. Fortunately, so far all the issues raised have been things I previously considered and planned for."</span>
                    <span class="font-weight-medium"> - Satoshi Nakamoto, 18th June 2010, Bitcoin Talk</span></p>
                </v-flex>
            </v-layout>
        </v-container>
        <app-learning-cards
        :cards = "catechismList"
        >
        </app-learning-cards>
        <v-container mt-15>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3>
                <h3>Definitions: Catechism</h3>
                <h4 class="mt-5">Britannica:</h4>
                <p>A manual of religious instruction usually arranged in the form of questions and answers used to instruct the young, to win converts, and to testify to the faith.</p>
                <h4 class="mt-5">Church of England:</h4>
                <p>An Instruction to be learned of every person before he be brought to be Confirmed by the Bishop.</p>
                <h4 class="mt-5">SatsIndex:</h4>
                <p>Bitcoinal doctrine to be memorised by the Orange Pilled so they can hodl strong in the face of unfounded slurs from those who are firmly rooted in the legacy world of fiat, banks, governments and broken economics.</p>
                <p>Catechisms we're forced onto inncent children and converts to make them keep and defend the Christian/Catholic faith. The Bitcoin Catechisms here are for Bitcoin converts to defend the Orange faith... Inline with much of this SatsIndex website, the sentiment here is a little tongue-in-cheek - the aim is not to indoctrinate people, but to aid understanding in an informative and entertaining way.</p>
                <p>These Bitcoin Catechisms will soon be placed into an Open Source Github repository where they may be critiqued, modified and extended by others.</p>
                <h4 class="mt-5">Nic Carter's FUD Dice:</h4>
                <p>In a similar vein to these Catechisms, Nic Carter created his <a href="https://medium.com/@nic__carter/how-to-critique-bitcoin-a-guide-3e36b26f9642" 
          target="_blank">FUD Dice</a> as a guide for critiquing Bitcoin - The Catachisms here will answer the objections.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import learningCardsComponent from './../components/LearningCards.vue'
import catechisms from '../data/catechisms.js'

  export default {
    data: () => ({
        catechisms: catechisms
    }),
    components: {
        'app-learning-cards': learningCardsComponent
    },
    computed: {
        catechismList () {
            let catechismList = this.catechisms.catechismList
            /*catechismList.forEach((item, i) => {
                //
            })*/
            return catechismList
        }
    }
  }
</script>