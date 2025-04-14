<template>
    <section class="mission">
        <div class="container">
            <div class="mission-header">
                <h3>相关系列</h3>
            </div>
            <div class="mission-container">
                <div class="mission_div mission-left">
                    <video id="video" src="../assets/videos/saoProgressive.mp4" controls >您的浏览器不支持video标签</video>
                     <!--播放/暂停切换按钮 -->
                     <!-- <button id="play-pause" title="播放" @click="toPlayPause()">
                		<i class="fa fa-play fa-3x"></i>
               		 </button> -->
                </div>
                <div class="mission_div mission-right">
                    <div class="mis-one">
                        <div class="mis-left">
                            <img src="../assets/images/kirito.jpg" alt=""/>
                        </div>
                        <div class="mis-right">
                            <h3>关于电影</h3>
                            <p>动画电影《刀剑神域 -进击篇- 无星之夜的咏叹调》改编自川原砾创作的小说《刀剑神域：进击篇》，由A-1 Pictures负责制作，河野亚矢子担任导演，户谷贤都担任角色设计。影片时长1小时37分钟，于2021年10月30日在日本公映。该片以亚丝娜的视角挖掘从艾恩葛朗特第1层到通关的轨迹。</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="mis-one">
                        <div class="mis-left">
                            <img src="../assets/images/asuna.jpg" alt=""/>
                        </div>
                        <div class="mis-right">
                            <h3>故事简介</h3>
                            <p>这是"闪光"与"黑衣剑士"在被如此称呼之前的故事——<br/>某一天，偶然戴上"NERvGear"的结城明日奈，原本是与网络游戏无缘的初中三年级少女。<br/>
游戏管理员告知。"这虽然是游戏，但可不是闹着玩的。"在游戏中的死亡，与现实中的死亡直接相关。听到这一消息的所有玩家都很混乱，游戏内到处都是凄惨的叫声。其中之一的亚丝娜，在不了解世界的规则的情况下，踏上了看不到顶的钢铁浮游城"艾恩葛朗特"的攻略之路。<br/>在和死亡作伴的世界里生存下去的过程中，亚丝娜遇见了命运般的"邂逅"。以及，"离别"——<br/>虽然被"眼前的现实"玩弄，但在拼命战斗的她面前出现的，是孤傲的剑士——桐人。</p>
                        </div>
                        <div class="clearfix"></div>
                    </div> 
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </section>
<!--//section-->
</template>

<script>
// import '../assets/css/2.css'
    export default {
        name:'Movie',
    }
</script>

<style scoped>
@import '../assets/css/2.css'
/* .btm
    {
        display:none;
        width:50px;
        height:2px;
        position:absolute;
        background:#FFF;
        margin:0 50px;
        left:150px;
        bottom:0;
        transition-duration:0.5s;	
    } */
</style>