<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <div class="main">
                    <Icon type="md-book"/>
                    <router-link to="/">
                        {{ index }}
                    </router-link>
                </div>
            </MenuItem>
            <MenuItem v-for="item in menu" :name="item.name" :key="item.name">
                <router-link :to="item.src">
                    {{ item.name }}
                </router-link>
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Nav",
    data(){
        return {
            menu: [],
            index: 'MySite',
            theme1: 'light'
        }
    },
    created(){
        this.$api.get('getNavMenu').then((res) => {
            this.menu = res.data
        })
    }
}
</script>

<style scope>
    .main{
        font-weight: 600;
    }
    a{
        color: #2f2f2f;
    }
</style>