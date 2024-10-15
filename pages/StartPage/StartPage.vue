<template>
	<view class="full-page">
		<view class="bkgd-group">
			<image class="bkgd-photo" src="../../static/StartPage/bkgr.png" />
			<image class="bkgd-patterns-1" src="../../static/StartPage/1.png" mode="widthFix"  />
			<image class="bkgd-patterns-2" src="../../static/StartPage/2.png" mode="widthFix"  />
			<image class="bkgd-patterns-3" src="../../static/StartPage/3.png" mode="widthFix"  />
			<image class="bkgd-patterns-4" src="../../static/StartPage/4.png" mode="widthFix"  />
			<image class="bkgd-patterns-5" src="../../static/StartPage/5.png" mode="widthFix"  />
			<image class="bkgd-patterns-6" src="../../static/StartPage/6.png" mode="widthFix"  />
		</view>
		
		<view class="title-group" :style="titleSliderStyle"> 
			<image class="title-group-word" src="../../static/StartPage/Title.png" mode="widthFix"></image>
			<text class="title-group-font-style">
				国潮云端私人定制平台
			</text>
		</view>
		
		<view class="arrow-group" @touchstart="start" @touchmove="move" @touchend="end" :style="sliderStyle">
			<image class="arrow" src="../../static/StartPage/arrow1.png" mode="widthFix" />
			<image class="arrow" src="../../static/StartPage/arrow2.png" mode="widthFix" />
		</view>
		
		<view class="register-login" @touchstart="start" @touchmove="move" @touchend="end" :style="sliderStyle">
			<view class="bkgd"></view>
			
			<view class="switch-block" v-if="!blockSwitch" >
				<image class="switch-block-1" src="../../static/StartPage/switchBlock1.png" mode="" @click="switchBlock" />
				<view class="switch-block-white-left"></view>
			</view>

			<view class="switch-block" v-if="blockSwitch" >
				<image class="switch-block-2" src="../../static/StartPage/switchBlock2.png" mode="" @click="switchBlock" />
				<view class="switch-block-white-right"></view>
			</view>
			
			<view class="text-box" v-if="!blockSwitch">
				<text class="white-block-font">
					登录
				</text>
				<view class="small-bar"></view>
			</view>
			
			<view class="text-box" style="transform: translateX(100%);" v-if="blockSwitch">
				<text class="white-block-font">
					注册
				</text>
				<view class="small-bar"></view>
			</view>

			<view class="text-box" style="transform: translateX(100%);" v-if="!blockSwitch" @click="switchBlock">
				<text class="font">
					注册
				</text>
			</view>
			
			<view class="text-box" v-if="blockSwitch" @click="switchBlock">
				<text class="font">
					登录
				</text>
			</view>

			<view class="input-box">
				<image class="dragon" style="transform: translateX(50%);" src="../../static/StartPage/dragon.png" mode="widthFix" />
				<view class="input-box" style="top: 5vh; width: 76%;">
					<view style="display: flex; align-self: flex-start; gap: 10px">
						<image class="phone" src="../../static/StartPage/phone.png" mode=""></image>
						<text class="title-font">手机号</text>
					</view>
						
					<input class="input-style" type="text" placeholder-class="input-font" placeholder="请输入手机号" />
					
					<view class="line" />
					
					<view style="display: flex; align-self: flex-start; gap: 10px">
						<image class="lock" src="../../static/StartPage/lock.png" mode=""></image>
						<text class="title-font">密码</text>
						<text class="title-font" style="color: red; position: absolute; right: 0;">忘记密码?</text>
					</view>
						
					<view style="display: flex; align-self: flex-start">
						<input class="input-style" type="text" placeholder-class="input-font" placeholder="请输入6～12位密码">
							<image src="../../static/StartPage/visiable.png" style="width: 4vw; position: absolute; right: 0; bottom: 10%;" mode="widthFix"></image>
						</input>
					</view>	
					
					<view class="line"></view>
					
				</view>
				
				<view style="position: absolute; display: flex; top: 25vh; justify-content: center;">
					<checkbox-group>
						<label>
							<checkbox />
							<text class="checkbox-font">
								同意
							</text>
							<text class="checkbox-font" style="color: blue;">
								《星禾平台服务协议》
							</text>
							<text class="checkbox-font">
								和
							</text>
							<text class="checkbox-font" style="color: blue;">
								《隐私政策》
							</text>
						</label>
					</checkbox-group>
				</view>
				<navigator class="button-box" url="../index/index">
					<button class="button" v-if="!blockSwitch">
							登录
					</button>
				</navigator>
				
				<navigator class="button-box" url="../index/index">
					<button class="button" style="background: rgba(107, 179, 167, 1);" v-if="blockSwitch">
						注册
					</button>
				</navigator>
			

			</view>
			
		</view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue';

const moveY = ref(0);
const titleMoveY = ref(0);
const blockSwitch = ref(false);
let startY = 0;
let nowY = 0;
const res = uni.getSystemInfoSync();
const moveableHeight = -0.588 * res.windowHeight;
const ThresholdHeight1 = 0.33 * moveableHeight;
const ThresholdHeight2 = 0.66 * moveableHeight;

const start = ((e)=>{
	startY = e.touches[0].clientY;
})
const move = ((e)=>{
	let dis = e.touches[0].clientY - startY;
	moveY.value = nowY + dis;
	
	if(nowY == 0 && moveY.value < ThresholdHeight1){
		moveY.value = moveableHeight;
		titleMoveY.value = moveY.value * 0.3;
	}
	else if (moveY.value < moveableHeight) {
		moveY.value = moveableHeight;
	}
	else if (nowY !=0 && moveY.value > ThresholdHeight2){
		moveY.value = 0;
		titleMoveY.value = 0;
	}
		
})
const end = (()=>{
	nowY = moveY.value;
	if (nowY >= ThresholdHeight1){
		moveY.value = 0;
		nowY = 0;
	}else if (nowY <= ThresholdHeight2){
		moveY.value = moveableHeight;
		nowY = moveableHeight;
	}
})

const sliderStyle = computed(() => ({
  transform: `translateY(${moveY.value}px)`
}));

const titleSliderStyle = computed(() => ({
  transform: `translateY(${titleMoveY.value}px)`
}));

const switchBlock = ((blockName)=>{
	blockSwitch.value = ! blockSwitch.value;
})

</script>

<style lang="scss" scoped>
	
.full-page{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 1;
	overflow: hidden;
}	

.bkgd-group{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 1;
	overflow: hidden;
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
	width: 100%;
	height: 30%;
	flex-direction: column;
	align-items: center; /* 垂直居中子元素 */
	opacity: 1;
	z-index: 10;
	overflow: hidden;
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
	width: 100%;
	height: 10%;
	flex-direction: column;
	align-items: center;
	z-index: 10;
	top: 82.34%;
	overflow: hidden;
	transition: all 0.1s ease-in;
	
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

.register-login{
	position: absolute;
	width: 100%;
	height: 59.2vh;
	top: 100%;
	border-radius: 29px;
	background: rgba(255, 255, 255, 1);
	animation: move-in 1s;
	transition: all 0.1s ease-in;
	z-index: 15;
	
	.bkgd{
		position: absolute;
		bottom: 0%;
		width: 100%;
		height: 48.9vh;
		border-radius: 0 0 29px 29px;
		background: rgba(255, 255, 255, 1);
	}

	.switch-block{
		position: absolute;
		right: 0%;
		width: 100%;
		height: 10.4vh;
		.switch-block-1{
			position: absolute;
			right: 0%;
			width: 56.7%;
			height: 100%;
			text-align: center;
		}
		.switch-block-white-left{
			position: absolute;
			left: 0;
			width: 50%;
			height: 100%;
			border-radius: 29px 29px 0 0;
			background: rgba(255, 255, 255, 1);
			text-align: center;
		}
		.switch-block-2{
			position: absolute;
			left: 0%;
			width: 61.6%;
			height: 100%;
		}
		.switch-block-white-right{
			position: absolute;
			right: 0;
			width: 50%;
			height: 100%;
			border-radius: 29px 29px 0 0;
			background: rgba(255, 255, 255, 1);
		}
	}
	
	.text-box{
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center; /* 垂直居中子元素 */
		justify-content: center; /* 可选，如果也需要水平居中 */
		text-align: center;
		width: 50%;
		height: 10.4vh;
		z-index: 20;
		.white-block-font{
			font-size: 28px;
			font-weight: 500;
			letter-spacing: 0px;
			line-height: 40.54px;
			color: rgba(166, 70, 20, 1);
			text-align: center;
			vertical-align: top;
		}
		.small-bar{
			width: 31.1%;
			height: 4.2%;
			opacity: 1;
			border-radius: 5px;
			background: rgba(127, 47, 40, 1);
		}
		
		.font{
			font-size: 28px;
			font-weight: 500;
			letter-spacing: 0px;
			line-height: 40.54px;
			color: rgba(255, 255, 255, 1);
			text-align: left;
			vertical-align: top;
		}
	}
	
	.input-box{
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 10.4vh;
		width: 100%;
		gap: 10px;
		.input-style{
			width: 100%;
		}
		.input-font{
			font-size: 15px;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 20px;
			color: rgba(200, 201, 204, 1);
			text-align: left;
			vertical-align: middle;
		}
		.title-font{
			font-size: 16px;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 20.72px;
			color: rgba(141, 141, 155, 1);
			text-align: left;
			vertical-align: top;
		}
		.line{
			width: 100%;
			height: 0.3vh;
			opacity: 1;
			border-radius: 5px;
			background: rgba(241, 241, 247, 1);
		}
		.phone{
			width: 12.08px;
			height: 21.72px;
			opacity: 1;
		}
		.lock{
			width: 15px;
			height: 16.67px;
			opacity: 1;
			}
		.dragon{
			position: absolute;
			top: 18vh;
			width: 121vw;
		}

	}
	
	.button-box{
		position: absolute;
		top: 33vh;
		width: 56%;
		height: 6.3vh;	
		.button{
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 1;
			font-size: 30px;
			width: 100%;
			height: 100%;
			color: white;
			text-align: center;
			vertical-align: top;
			border-radius: 28.5px;
			background: rgba(230, 210, 175, 1);
		}
	}


	.checkbox-font{
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20px;
		color: rgba(50, 50, 51, 1);
		text-align: left;
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

</style>
