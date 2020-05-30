<template>
    <nav class="navbar navbar-expand-sm bg-transparent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="(link,index) in links" :key="index">
                <a class="nav-link" href="#">{{link.name}}</a>
            </li>
            <li class="nav-item vline" />
            <li class="nav-item" >
                <img class="nav-link" src="@/assets/images/icon.svg">
            </li>
            <li class="nav-item">
                <button class="btn button nav-link">Войти</button>
            </li>
        </ul>
    </nav> 
</template>
<style scoped>
.vline{
    border:1px solid #99A6D3;
}
</style>
<script type="text/javascript">
export default{
    data(){
        return{
            links:[
            {
                name:'Компания'
            },
            {
                name:'Поддержка'
            },
            {
                name:'Купить'
            },
            ]
        }
    }
};
</script>