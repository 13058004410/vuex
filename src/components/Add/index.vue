<template>
    <div>
        <p>当前最新的数值为：{{count}}</p>
        <!-- <button @click="addHandler1">+1</button> -->
        <button @click="addHandler2">+N</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{}
    }
    ,
    computed:{
        ...mapState(['count'])
    },
    methods:{
        // addHandler1(){
        //     this.$store.commit('addN',10) //commit的作用就是调用mutations中的某个函数
        // },
        ...mapMutations(['add','addN']),
        addHandler2(){
            this.addN(10)
        }
    }
}
</script>

<style>

</style>