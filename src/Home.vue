<template>
    <div>
        <div v-width="600">
            <h-circle :percent="bookCount" :stroke-width="18" :size="200">
                <p class="dark-color" v-font="16">Book Count</p>
                <p class="gray-color">
                    <span class="primary-color" v-font="16">{{bookCount}}</span>
                </p>
            </h-circle>
            <h-circle :percent="wordCount" :stroke-width="12" :size="150">
                <p class="dark-color" v-font="12">Word Count</p>
                <p class="gray-color">
                    <span class="primary-color" v-font="12">{{wordCount}}</span>
                </p>
            </h-circle>
        </div>
        <div>
            <button class="h-btn" @click="openBookModal = true">Add New Book</button>
            <Modal v-model="openBookModal">
                <CreateBook :fruit="value" :params="{subparam: 'test1'}" @close="openBookModal=false"
                            @success="success"></CreateBook>
            </Modal>
            <button class="h-btn" @click="openWordModal = true">Add New Word</button>
            <Modal v-model="openWordModal">
                <CreateBook :fruit="value" :params="{subparam: 'test1'}" @close="openWordModal=false"
                            @success="success"></CreateBook>
            </Modal>
        </div>
    </div>
</template>

<script>
    import Api from './api'
    import CreateBook from "./CreateBook";
    import CreateWord from "./CreateWord";

    export default {
        components: {
            CreateBook,
            CreateWord
        },
        data() {
            return {
                value: 10,
                bookCount: 0,
                wordCount: 0,
                openBookModal: false,
                openWordModal: false,
            };
        },
        created() {
            Api.Stats({}).then(
                response => {
                    console.log('HOME: Response: ', response);
                    if (response.status === 200) {
                        this.$Message.success(`Success`);
                        this.bookCount = response.data.data['BookCount'];
                        this.wordCount = response.data.data['WordCount'];
                    } else {
                        this.$Message.error(`Error`);
                    }
                }
            )
        },
        methods: {
            success(data) {
                this.$Message.success(data)
            }
        }
    };
</script>
