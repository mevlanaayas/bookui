<template>
    <div class="layout-demo-3-vue">
        <Layout :siderFixed="true" :siderCollapsed="siderCollapsed">
            <Sider theme="dark">
                <h-menu style="margin-top: 20px;" className="h-menu-dark" :datas="menuDatas"
                        @select="triggerSelect"
                        :inlineCollapsed="siderCollapsed">
                </h-menu>
            </Sider>
            <Layout :headerFixed="true">
                <HHeader theme="white">
                    <div style="width:200px;float:left;">
                        <h-button icon="h-icon-menu" size="l" noBorder style="font-size: 20px"
                                  @click="siderCollapsed=!siderCollapsed">
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
    export default {
        name: 'App',
        data() {
            return {
                siderCollapsed: false,
                menuDatas: [
                    {title: 'Books', key: 'books', icon: 'h-icon-user'},
                    {title: 'Words', key: 'words', icon: 'h-icon-task'}
                ]
            };
        },
        methods: {
            triggerSelect(menu) {
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
