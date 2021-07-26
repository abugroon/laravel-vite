<template>
    <div id="main-app">
        <ul>
            <li v-for="joke in jokes">
                <p>{{joke.setup}}</p>
                <br>
                {{joke.punchline}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MainApp",
        data() {
            return {
                message: 'test file',
                jokes: [],
            }
        },
        computed:{
            test(){
                return[

                ]
            }
        },
        mounted() {

            axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/2')
                .then(res => {
                    this.jokes = res.data

                }).catch(console.log)
        }
    }
</script>

<style scoped  lang="scss">
    li{
        p{
            padding: 10px;
            background: #AAA;
        }
       font-size: 19px;
    }
</style>
