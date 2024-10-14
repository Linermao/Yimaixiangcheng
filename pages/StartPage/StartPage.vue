<template>
	<view class="shape-combo">
		
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
.shape-combo {
  position: absolute;
  width: 200px; /* 矩形的宽度 */
  height: 100px; /* 矩形的高度 */
  background-color: #ffff; /* 矩形的背景颜色 */
}

.shape-combo::before,
.shape-combo::after {
  content: '';
  position: absolute;
  width: 50px; /* 圆形的直径 */
  height: 50px; /* 圆形的直径 */
  background-color: #ffff; /* 圆形的背景颜色 */
  border-radius: 50%; /* 使形状成为圆形 */
}

.shape-combo::before {
  top: -25px; /* 圆形上移到矩形上方 */
  left: 75px; /* 圆形在矩形水平方向上的位置 */
}

.shape-combo::after {
  bottom: -25px; /* 圆形下移到矩形下方 */
  left: 75px; /* 圆形在矩形水平方向上的位置 */
}


</style>
