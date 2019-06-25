<template>
    <div class="layout-demo-3-vue">
        <Layout>

            <Layout :headerFixed="true">
                <HHeader theme="white">
                    <div style="width:600px;float:left;">
                        <h-button icon="h-icon-menu" size="l" noBorder style="font-size: 20px"
                                  @click="open('left')">
                        </h-button>
                        <h-button icon="h-icon-home" size="l" style="font-size: 16px"
                                  @click="goToMain">Home
                        </h-button>
                    </div>
                </HHeader>
                <h-content style="padding: 0 30px;">
                    <transition name="router-anim" enter-active-class="animated fadeIn">
                        <router-view/>
                    </transition>
                </h-content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import LeftMenu from './LeftMenu'
    export default {
        name: 'App',
        data() {
            return {
                siderCollapsed: false,
                menuData: [
                    {title: 'Books', key: 'books', icon: 'h-icon-user'},
                    {title: 'Words', key: 'words', icon: 'h-icon-task'}
                ]
            };
        },
        methods: {
            open(place) {
                this.$Modal({
                    type: `drawer-${place}`,
                    width: 400,
                    component: {
                        vue: LeftMenu,
                        data: { subparam: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
                        datas: { fruit: this.value } // 子组件直接使用 props 即可使用，兼容性 1.15.0+
                    },
                    events: {
                        success: (modal, data) => {
                            this.value = data;
                        }
                    }
                });
            },
            triggerSelectMenu(menu) {
                this.$router.push({
                    name: menu.key
                });
                this.$Message.info(`Selected ${menu.key}`);
            },
            goToMain() {
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    @import "./animate.css";
</style>
