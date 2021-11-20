<template>
    <img v-if="img" :src="img" alt="Image bg">
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>Porfa, termina con el signo de ?</p>
        <div v-if="isValideQuestion">
            <h2>{{question}}</h2>
            <h1>{{ answer == 'yes' ? 'Si' : 'No' }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Indecision App',

    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValideQuestion: false
        }
    },

    watch: {
        question( newValue, oldValue ){
            this.isValideQuestion = false
            if( !newValue.includes('?') ) return
            this.isValideQuestion = true
            this.getAnswer()
        }
    },

    methods: {
        async getAnswer() {
            this.answer = 'Pensando...'
            const {answer, image} = await fetch('https://www.yesno.wtf/api').then(res => res.json())
            this.img = image
            this.answer = answer
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, .4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }

    input {
        border-radius: 10px;
        border: none;
        font-size: 1.2rem;
        padding: .8rem 1.2rem;
        width: 50%;
        margin-bottom: .8rem;
    }

    @media only screen and (max-width: 1000px) {
        input {
            width: 80%;
        }
    }

    input:focus {
        outline: none;
    }

    p{
        color: #ffffff;
        font-size: 1.4rem;
    }

    h1, h2 {
        color: #ffffff;
    }

    h2 {
        margin-top: calc(100vh - 50vh);
        margin-bottom: 1rem;
    }
</style>