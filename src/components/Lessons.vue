<template>
    <div>
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
                        <v-card-text v-if="item.advice">
                            <p class="mb-0">CONCLUDING THOUGHTS:</p>
                            <p class="mb-0">{{ item.advice }}</p>
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
        //
    }),
    props: ['lessons']
  }

</script>
