<template>
  <h2>{{ checkTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{ mathForm }}</p>
  <button class="btn" @click="plusNumber()">Sumar</button>
  <button class="btn" v-on:click="minusNumber()">Restar</button>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 10,
            // required: true
            validator( value ) {
                return value >= 10
            }
        }
    },
    name: 'CoounterApp',

    data() {
        return {
            counter: this.start
        }
    },
    
    methods: {
        plusNumber() {
            this.counter = this.counter + 1
        },

        minusNumber() {
            this.counter = this.counter - 1
        }
    },

    // Las propiedades computadas tienen que regresar un valor
    computed: {
        mathForm() {
            return this.counter * this.counter
        },

        checkTitle() {
            // return this.title ? this.title : 'Counter'
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    .btn {
        background-color: #64bb87;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        margin: 2rem;
        padding: .4rem 1.4rem;
        transition: 0.3s ease-in-out;
    }

    .btn:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>