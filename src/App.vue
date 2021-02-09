<template>
	<div>
		<my-add></my-add>
		<p>======我是华丽的分割线================</p>
		<my-sub></my-sub>
	</div>
</template>

<script>
import Add from '@/components/Add'
import Sub from '@/components/Sub'
export default {
  name: 'App',
  components:{  //把那两个子组件注册为根组件的私有组件
	  'my-add':Add,
	  'my-sub':Sub
  }
}
</script>

<style>

</style>
