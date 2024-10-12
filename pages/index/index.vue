<template>
	<view class="bkgd-group">
		<image class="bkgd-photo" src="../../static/StartPage/bkgr.png" />
		<image class="bkgd-patterns-1" src="../../static/StartPage/1.png" mode="widthFix"  />
		<image class="bkgd-patterns-2" src="../../static/StartPage/2.png" mode="widthFix"  />
		<image class="bkgd-patterns-3" src="../../static/StartPage/3.png" mode="widthFix"  />
		<image class="bkgd-patterns-4" src="../../static/StartPage/4.png" mode="widthFix"  />
		<image class="bkgd-patterns-5" src="../../static/StartPage/5.png" mode="widthFix"  />
		<image class="bkgd-patterns-6" src="../../static/StartPage/6.png" mode="widthFix"  />
	</view>

	<view class="title-group">
		<image class="title-group-word" src="../../static/StartPage/Title.png" mode="widthFix"></image>
		<text class="title-group-font-style">
			国潮云端私人定制平台
		</text>
	</view>
	<view class="arrow-group">
		<image class="arrow" src="../../static/StartPage/arrow1.png" mode="widthFix" />
		<image class="arrow" src="../../static/StartPage/arrow2.png" mode="widthFix" />
	</view>

	
</template>

<script setup>
import { ref } from 'vue';

// 定义一个响应式变量来存储滚动距离
const scrollTop = ref(0);

// 监听页面滚动事件
uni.onPageScroll((e) => {
  // 更新滚动距离
  scrollTop.value = e.scrollTop;
  console.log(scrollTop.value);
});

</script>

<style lang="scss" scoped>
.bkgd-group{
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	
	.bkgd-photo{
		position: absolute;
		top: 0;
		width: 100vw;
		height: 100vh;
	}
	.bkgd-patterns-1{
		position: absolute;
		top: 37.5%;
		left: -15.56%;
		width: 264px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
	.bkgd-patterns-2{
		position: absolute;
		top: 50%;
		left: -60%;
		width: 508px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
	.bkgd-patterns-3{
		position: absolute;
		top: 75%;
		left: 75%;
		width: 126px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
	.bkgd-patterns-4{
		position: absolute;
		top: 6.7%;
		left: 3.2%;
		width: 153.01px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
	.bkgd-patterns-5{
		position: absolute;
		top: 20.7%;
		left: 68.1%;
		width: 110.2px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
	.bkgd-patterns-6{
		position: absolute;
		top: 54%;
		left: 75%;
		width: 118.44px;
		mix-blend-mode: multiply;
		opacity: 1;
	}
}

.title-group{
	display: flex;
	position: absolute;
	top: 31.2%;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center; /* 垂直居中子元素 */
	opacity: 1;
	z-index: 10;
	.title-group-word{
		width: 71%;
		opacity: 1;
	}
	.title-group-font-style{
		margin-top: 3%;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 7px;
		line-height: 16px;
		color: rgba(181, 136, 81, 1);
		text-align: center;
		vertical-align: top;
	}


}

.arrow-group{
	position: absolute;
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	z-index: 10;
	top: 82.34%;
	
	.arrow{
		width: 40px;
		animation: arrow-move 1s alternate infinite;
	}
	.arrow:nth-child(1){
		animation-delay: -0.2s;
	}
	.arrow:nth-child(2){
		animation-delay: -0.1s;
	}
	@keyframes arrow-move{
		0%{
			opacity: 0;
			transform: translate(0px, 40px);
		}
		100%{
			opacity: 1;
		}
	}
}

.RegisterOrLogin{
	position: absolute;
	width: 100vw;
	height: 58.8%;
	top: 41.2%;
	border-radius: 29px;
	background: rgba(255, 255, 255, 1);
	animation: move-in 1s;
	.Login{
	}
	.Register{
	}
	@keyframes move-in{
		0%{
			opacity: 0;
			transform: translate(0px, 150px);
		}
		100%{
			opacity: 1;
		}
	}
}
.movable-area {
	height: 300rpx;
	width: 100%;
	background-color: #D8D8D8;
	overflow: hidden;
}

.movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150rpx;
		width: 150rpx;
		background-color: #007AFF;
		color: #fff;
	}

</style>
