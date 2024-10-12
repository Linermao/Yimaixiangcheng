<template>
	<view class="slider" @touchstart="start" @touchmove="move" @touchend="end" :style="sliderStyle">
		<view class="content">
			文字内容
		</view>
		<view class="btn-del">
			删除
		</view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue';

const moveX = ref(0); // 假设 movex 是响应式数据
let startX = 0;
let nowX = 0;
const start = ((e)=>{
	startX = e.touches[0].clientX;
})
const move = ((e)=>{
	let dis = e.touches[0].clientX - startX;
	// 右移限位回弹
	moveX.value = nowX + dis;
	if (moveX.value < -50 && nowX != -100){
		moveX.value = -100;
		nowX = -100;
	}
})
const end = (()=>{
	nowX = moveX.value;
	if (moveX.value > -50){
		moveX.value = 0;
		nowX = 0;
	}else if (moveX.value < -50){
		moveX.value = -100;
		nowX = -100;
	}
})
const sliderStyle = computed(() => ({
  transform: `translateX(${moveX.value}px)`
}));
	
</script>

<style lang="scss" scoped>
.slider{
	position: relative;
	transition: all 0.1s ease-in;
	.content{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: antiquewhite;
		font-size: 25px;
	}
	.btn-del{
		width: 100px;
		position: absolute;
		right: -100px;
		background-color: red;
	}
}

</style>
