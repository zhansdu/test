<template>
	<div class="w-100 h-100">
		<div class="back w-100 h-100">
			<img src="@/assets/images/background.png" class="image" />
		</div>
		<div class="main">
			<navigationBar/>
			<div class="flex-row" style="padding-right:6%;">
				<img src="@/assets/images/logo.svg">
				<div class="flex-row w-100 align-items-center justify-content-center">
					<div class="cursor-pointer mr-5" :class="{active:link.active}" v-for="(link,index) in links" :key="index">{{link.name}}</div>
				</div>
			</div>
			<router-view/>
		</div>
	</div>
</template>
<style scoped>
.back{
	position: absolute;
	z-index:-1;
}
.image{
	width: 100%;
	height:90%;
}
.main{
	padding-top: 2%;
	padding-left:9%;
	padding-right:9%;
}
</style>
<script>
import navigationBar from '@/components/shared/navbar'
export default{
	data(){
		return{
			activeIndex:0,
			links:[
			{
				name:'Описание',
				active:false
			},
			{
				name:'Скачать',
				active:false
			},
			{
				name:'Инструкции',
				active:false
			}
			]
		}
	},
	components:{
		navigationBar
	}
};
</script>