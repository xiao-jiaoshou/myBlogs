<template>
  <div>
    <Carousel v-model="value2" loop>
        <CarouselItem :key="item.title" v-for="item in pic">
            <div class="demo-carousel">
                <router-link :to="item.src">
                    <img src="item.img" alt="">
                    <div>
                        {{ item.title }}
                    </div>
                </router-link>
            </div>

        </CarouselItem>
    </Carousel>
    <!-- 文章列表 -->
    <div class="article-list">
        <row type="flex" justify="space-around" class="code-row-bg">
            <i-col span="11">
                <articleList :list="list" :title="listTitle">
                </articleList>
            </i-col>
            <i-col span="11">
                <articleList :list="hotList" :title="hotListTitle">
                </articleList>
            </i-col>

        </row>
    </div>
  </div>
</template>

<script>
import articleList from '@/components/articleList.vue'
export default {
    name: 'myHome',
    components: {
        articleList,
    },
    data(){
        return {
            value2: 0,
            pic: [],
            list: [],
            listTitle: '最新文章',
            hotList: [],
            hotListTitle: "最热文章"
        }
    },
    created(){
        this.$api.get('getIndexPic').then((res) => {
            let rData = res.data.slice(0, 5)
            let tData = []
            rData.map((item) => {
                if(item.id !== 0){
                    tData.push(item)
                }
            })
            this.list = tData
        })
        // 获取热点文章
        this.$api.get('getHotArticle').then((res) => {
            let rData = res.data.slice(0, 5)
            let tData = []
            rData.map((item) => {
                if(item.id !== 0){
                    tData.push(item)
                }
            })
            this.hotList = tData
        })
    }
}
</script>

<style scoped>
    .demo-carousel {
        width: 98vm;
        height: 30vm;
    }
    .demo-carousel img{
        width: 100%;
        position: relative;
    }
    .demo-carousel div{
        padding: 30px;
        background: RGBA(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
        color: white;
        font-size: 60px;
        width: 70%;
        top: 10vm;
        text-align: center;
        margin-left: 15%;
    }
    .article-list{
        padding: 20px 0 20px 0
    }
</style>