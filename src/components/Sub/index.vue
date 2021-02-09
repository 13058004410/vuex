<template>
    <div>
        <p>当前最新的数值为：{{count}}</p>
        <button @click="subHandler1">-1</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['count'])
    },
    methods:{
        subHandler1(){
            this.$store.commit('subN',5)  //commit的作用就是调用mutations中的某个函数
        }
    }
}
</script>

<style>

</style>