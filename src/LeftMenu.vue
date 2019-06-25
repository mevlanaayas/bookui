<template>
    <div>
        <Menu :datas="data" className="h-menu-white" ref="menu" @select="triggerSelectMenu"></Menu>
    </div>
</template>

<script>
    import store from './store';
    import { mapGetters } from 'vuex';
    export default {
        props: {
            params: Object,
            fruit: String
        },
        data() {
            return {
                value: this.fruit,
                data: [
                    {
                        title: 'Home',
                        key: 'home',
                        icon: 'h-icon-home'
                    },
                    {
                        title: 'Books',
                        key: 'books',
                        icon: 'h-icon-home'
                    },
                    {
                        title: 'Words',
                        key: 'words',
                        icon: 'h-icon-search'
                    },
                ]
            };
        },
        store,
        computed: {
            ...mapGetters({
                test: 'isSideBarOpen'
            })
        },
        methods: {
            triggerSelectMenu(menu) {
                this.$router.push({
                    name: menu.key
                });
                // this.$Message.info(`Selected ${menu.key}`);
            },
            go() {
                // Note: If you call it using HeyUI.$Modal, you will not be able to use vure dependencies such as $router.
                this.$router.push({ name: 'Home' });
                this.$emit('close');
            },
            close() {
                this.$emit('close');
            }
        }
    };
</script>
