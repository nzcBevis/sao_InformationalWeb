<template>
    <section>
        <div v-for="(value,key,index) in msg" :key="key">
                <input type="checkbox" 
                        :id="`${key}`" name="interests" @click="ischecked"
                        v-model="ruleForm.checkboxs[index]" >
                <label :for="`${key}`">{{value}}</label>
        </div>
    </section>
    <!-- <section>
        <span>您看过或听过哪些刀剑系列的动漫或者游戏:</span>
        <img src="../assets/images/attention.png" class="specialImg"><br/>
        <input type="checkbox" id="SwordArtOnlineⅠ" name="interests" 
                v-model="ruleForm.checkboxs[1]" @click="ischecked" ref="inters[1]">
        <label for="SwordArtOnlineⅠ">刀剑神域第一季</label>
        <input type="checkbox" id="SwordArtOnlineⅡ" name="interests" 
                v-model="ruleForm.checkboxs[2]" @click="ischecked" ref="inters[2]">
        <label for="SwordArtOnlineⅡ">刀剑神域第二季</label><br/>
        <input type="checkbox" id="SwordArtOnlineⅢ" name="interests" 
                v-model="ruleForm.checkboxs[3]" @click="ischecked" ref="inters[3]">
        <label for="SwordArtOnlineⅢ">刀剑神域第三季</label>
        <input type="checkbox" id="SwordArtOnlineMovie" name="interests" 
                v-model="ruleForm.checkboxs[4]" @click="ischecked" ref="inters[4]">
        <label for="SwordArtOnlineMovie">刀剑神域剧场版序列之争</label><br/>
        <input type="checkbox" id="SwordArtOnlineAlternative" name="interests" 
                v-model="ruleForm.checkboxs[5]" @click="ischecked" ref="inters[5]">
        <label for="SwordArtOnlineAlternative">刀剑神域外传&nbsp;&nbsp;&nbsp;</label>
        <input type="checkbox" id="SAOMD" name="interests" v-model="ruleForm.checkboxs[6]" @click="ischecked" ref="inters[6]">
        <label for="SAOMD">刀剑神域记忆碎片</label><br/>
        <input type="checkbox" id="SAOARS/UB" name="interests" v-model="ruleForm.checkboxs[7]" @click="ischecked" ref="inters[7]">
        <label for="SAOARS/UB">刀剑神域ARS/UB</label>
        <input type="checkbox" id="SAOIF" name="interests" v-model="ruleForm.checkboxs[8]" @click="ischecked" ref="inters[8]">
        <label for="SAOIF">刀剑神域IF</label><br/>
        <input type="checkbox" id="none" name="interests" v-model="ruleForm.checkboxs[9]" @click="ischecked" ref="none">
        <label for="none">没看过，没听过</label>
    </section> -->
</template>

<script>
    export default {
        name:'QuestionInterestsContent',
        data(){
              return{
                msg:{"SwordArtOnlineⅠ":"刀剑神域第一季","SwordArtOnlineⅡ":"刀剑神域第二季",
                     "SwordArtOnlineⅢ":"刀剑神域第三季","SwordArtOnlineMovie":"刀剑神域剧场版序列之争",
                     "SwordArtOnlineAlternative":"刀剑神域外传","SAOMD":"刀剑神域记忆碎片",
                     "SAOARS/UB":"刀剑神域ARS/UB","SAOIF":"刀剑神域IF","none":"没看过，没听过"
                }
              }  
        }
    }
</script>

<style>

</style>