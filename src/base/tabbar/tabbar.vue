<template>
	<div class="m-tabbar">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name:'m-tabbar',
		props:['value']
	}
</script>