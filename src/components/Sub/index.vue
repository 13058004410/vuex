<template>
    <div>
        <!-- //组件访问state里边的数据的第一种方式 -->
        <!-- <p>当前最新的数值为：{{$store.state.count}}</p> -->
        <p>当前最新的数值为：{{showNum}}</p>
        <button @click="subHandler1">-1</button>
        <button @click="subHandler2">-N</button>
        <button @click="subHandler3">-1 async</button>
        <button @click="subNasync(7)">-N async</button>
    </div>
</template>

<script>
// import {mapState} from 'vuex'
import {mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['showNum'])  //把mapGetters函数映射到computed计算属性当中
    },
    methods:{
        ...mapMutations(['subN','sub']),  //这是调用mutations里边的某个函数，这是方式二       
        subHandler1(){
            this.sub() //这是调用mutations里边的某个函数，这是方式二
        },

        subHandler2(){
            this.$store.commit('subN',5)  //commit的作用就是调用mutations中的某个函数，这是方式一
        },


        ...mapActions(['subAsync','subNasync']),
        subHandler3(){
            this.subAsync()
        },
        // ,
        // subHandler4(){
        //     this.subNasync(7)
        // }
        
    }
}
</script>

<style>

</style>