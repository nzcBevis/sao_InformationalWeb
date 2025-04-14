<template>
    <div>
        <CommonHeader></CommonHeader>
        <!--section-->           
        <router-view></router-view>
        <!--//section-->
        <!--footer-->
        <Footer></Footer>
        <!--//footer-->
    </div>
</template>

<script>     
    import Footer from './Footer.vue';
    import CommonHeader from './CommonHeader.vue'
    export default {
        name:'Index',
        components: { 
            CommonHeader,
            Footer 
        },
        // update(){
        //     window.scroll(0, 0)
        //     console.log("index")
        // }   	
    }
</script>

<style>

</style>