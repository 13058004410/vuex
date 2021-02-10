<template>
    <div>
        <!-- 组件访问state中的数据的第二种方式 -->
        <!-- <p>当前最新的数值为：{{count}}</p>   -->
        <p>{{$store.getters.showNum}}</p>
        <!-- <button @click="addHandler1">+1</button> -->
        <button @click="addHandler2">+N</button>
        <button @click="addHandler3">+1 async</button>
        <button @click="addHandler4">+N async</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{}
    }
    ,
    computed:{
        ...mapState(['count'])   //组件访问state中的数据的第二种方式
    },
    methods:{
        // addHandler1(){
        //     this.$store.commit('addN',10) //commit的作用就是调用mutations中的某个函数
        // },
        ...mapMutations(['add','addN']),
        addHandler2(){
            this.addN(10)
        },
        //异步地让count自增+1
        addHandler3(){
            //dispatch使用来触发某个actions里边的函数
            this.$store.dispatch('addAsync')
        },
        addHandler4(){
            this.$store.dispatch('addNAsync',10086)
        }
    }
}
</script>

<style>

</style>