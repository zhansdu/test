<template>
    <nav class="navbar navbar-expand-sm bg-transparent">
        <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item" v-for="(link,index) in links" :key="index">
                <a class="nav-link ml-3" href="#">{{link.name}}</a>
            </li>
            <li class="nav-item vline ml-3 mr-3" />
            <li class="nav-item">
                <dropdownItem/>
            </li>
            <li class="nav-item ml-3">
                <button class="button">Войти</button>
            </li>
        </ul>
    </nav> 
</template>
<style scoped>
.vline{
    border:1px solid #99A6D3;
    height:20px;
}
.button{
    padding: 3px 18px;
    background:#1F2455 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 10px #00000033;
    border: 1px solid #383E71;
    border-radius: 19px; 
}
</style>
<script type="text/javascript">
import dropdownItem from '@/components/shared/dropdownItem'
export default{
    components:{
        dropdownItem
    },
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