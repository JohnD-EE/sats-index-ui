<template>
    <div>
        <v-container row mt-5 v-if="displayAll">
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3
                    >
                    <div 
                    v-for="(item, i) in cards"
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
                        <div v-for="(fud, n) in item.fuds"
                            :key="n">
                            <p>{{ fud }}</p>
                        </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div v-for="(rebuttal, n) in item.rebuttals"
                            :key="n">
                            <p>{{ rebuttal }}</p>
                        </div>
                        </v-card-text>
                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-else>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3 
                    >
                    <div  
                    class="mt-5 mb-5">
                    <v-card
                    class="mx-auto"
                    >
                    <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                            @click="minusCard"
                        >
                            <v-icon>mdi-chevron-left</v-icon> Previous
                        </v-btn>
                        <v-btn
                            color="orange lighten-2"
                            text
                            @click="plusCard"
                        >
                            Next <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            color="orange lighten-2"
                            text
                            @click="randomCard"
                        >
                            <v-icon class="mr-2">mdi-help-circle</v-icon> Random
                        </v-btn>
                        </v-card-actions>
                        <v-card-text>
                            
                            <v-row>
                            <v-col
                            cols="12"
                            >
                            <span class="headline text--primary">
                            {{ cards[pointer].name }}
                        </span>
                            </v-col>
                            </v-row>
                        <div v-for="(fud, n) in cards[pointer].fuds"
                            :key="n">
                            <v-row>
                            <v-col
                            cols="1"
                            >
                            {{ n + 1 }}. 
                            </v-col>
                            <v-col
                            cols="11"
                            >
                            {{ fud }}
                            </v-col>
                            </v-row>
                        </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-row>
                            <v-col
                            cols="12"
                            >
                            <span class="subtitle-2 text--primary">
                            Rebuttals:
                        </span>
                            </v-col>
                            </v-row>
                            <div v-for="(rebuttal, n) in cards[pointer].rebuttals"
                            :key="n">
                            <v-row>
                            <v-col
                            cols="1"
                            >
                            {{ n + 1 }}. 
                            </v-col>
                            <v-col
                            cols="11"
                            >
                            {{ rebuttal }}
                            </v-col>
                            </v-row>
                        </div>
                        </v-card-text>
                        
                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({
        pointer: 0,
        displayAll: false
    }),
    props: ['cards'],
    methods: {
        randomCard () {
            let pointer = Math.floor(Math.random() * this.cards.length)
            if (pointer === this.pointer) {
                this.plusCard()
            } else {
                this.pointer = pointer
            }
        },
        plusCard () {
            let pointer = this.pointer
            pointer ++
            this.pointer = pointer > (this.cards.length - 1) ? 0 : pointer
        },
        minusCard () {
            let pointer = this.pointer
            pointer --
            this.pointer = pointer < 0 ? (this.cards.length - 1) : pointer
        }
    }
  }

</script>
