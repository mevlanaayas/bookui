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
                    width: 300,
                    component: {
                        vue: LeftMenu,
                    },
                    events: {
                        success: (modal, data) => {
                            this.value = data;
                        }
                    }
                });
            },
            goToMain() {
                this.$router.push('/');
            }
        }
    }
</script>
<style lang="less">
    @import "./animate.css";
</style>
