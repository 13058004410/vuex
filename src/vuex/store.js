import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({  //这里生成了一个名为store对象
     state:{
        count:0
    },
    //只有mutations中的函数才有权限修改state中的数据
     mutations:{   //Mutation是用来变更Store中的数据   不能在mutations里边执行异步操作
         add(state){
            state.count++
         },
         addN(state,step){
                state.count+=step
         },
         sub(state){
            state.count--
         },
         subN(state,step){
             state.count-=step
         }
     },
     actions:{ //负责异步操作
         //在actions中不能直接修改state中的数据
         //必须通过context.commit()来触发mutations中的某个函数才行  context是指Store实例对象
         addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },1000)
         },
         addNAsync(context,step){
             setTimeout(()=>{
                context.commit('addN',step)
             },1000)
         },
         subAsync(context){
             setTimeout(()=>{
                 context.commit('sub')
             },1000)
         },
         subNasync(context,step){
             setTimeout(()=>{
                 context.commit('subN',step)
             },1000)
         }
     },
     getters:{  //getters的作用就是对state里边的数据进行包装 负责如何在页面输出
         showNum(state){
             return '当前最新的值为：【'+state.count+'】'
         }
     }
})

