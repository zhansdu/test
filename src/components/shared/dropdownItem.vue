<template>
	<div>
		<img class="nav-link cursor-pointer" style="position:relative" @click="clicked=!clicked" src="@/assets/images/icon.svg">
		<div v-if="clicked">
			<div class="arrow-up"/>
			<div class="box flex-row" style="padding: 3%;">
				<div class="flex-column border-right" style="padding: 0 3% 3% 0;">
					<div class="title">Сервисы</div>
					<div class="flex-column">
						<div class="text-black">Sector.kz</div>
						<div class="subtitle">Главная страница компании Sector-3</div>
					</div>
					<div class="flex-column">
						<div class="text-black">Sidocum.kz</div>
						<div class="subtitle">Формирование и доставка электронных документов</div>
					</div>
					<div class="flex-column">
						<div class="text-black">Tnved.info</div>
						<div class="subtitle">Определитель кодов ТНВЭД</div>
					</div>
					<div class="flex-column">
						<div class="text-black">Vsklad.kz</div>
						<div class="subtitle">Автоматическая загрузка данных по ГТД в бухгалтерию</div>
					</div>
				</div>
				<div class="flex-column"  style="padding-left:3%;">
					<div class="title">Приложения</div>
					<div class="flex-column">
						<div class="text-black">D-Sector TS</div>
						<div class="subtitle">Формирование таможенных деклараций</div>
					</div>
					<div class="flex-column">
						<div class="text-black">Sector ВЭД-ТС</div>
						<div class="subtitle">Справочная система для участников ВЭД</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.title,.text-black,.subtitle{
	color:#2E2E50 !important;
	font-size: 14px;
}
.text-black{
	margin-top: 3%;
}
.subtitle{
	color: #9698A4 !important;
}
.border-right{
	border-right:1px solid #D3D3D3;;
}
.box{
	position:absolute;
	margin-top:9px;
	width:822px;
	background: #F6F6FF 0% 0% no-repeat padding-box;
	border-radius: 12px;
	right: 1.5%;
}
.arrow-up {
	position: absolute;
	margin-left:7px;
	width: 0; 
	height: 0; 
	border-left: 9px solid transparent;
	border-right: 9px solid transparent;

	border-bottom: 9px solid #f5f7fa;
}
</style>
<script type="text/javascript">
export default{
	data(){
		return{
			clicked:false
		}
	}
};
</script>