import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  //这里生成了一个名为store对象
     state:{
        count:0
    },
     mutations:{
         add(state){
             state.count++
         },
         addN(state,step){
             state.count+=step
         },
         subN(state,step){
             state.count-=step
         }
     },
     actions:{},
     getters:{}
})

