<template>
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
</template>

<script>
    import Api from './api'

    export default {
        data() {
            return {
                value: 10,
                bookCount: 0,
                wordCount: 0
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
        }
    };
</script>
