<template>
    <div>
        <Form ref="form" :label-width="100" :rules="rules" :model="data">
            <FormItem>
                <p>Create New Word</p>
            </FormItem>
            <FormItem label="Word" prop="Word">
                <input type="text" v-model="data.Word"/>
            </FormItem>
            <FormItem label="Book" prop="BookId">
                <input type="number" v-model="data.BookId"/>
            </FormItem>
            <FormItem label="Sentence" prop="Sentence">
                <input type="text" v-model="data.Sentence"/>
            </FormItem>
            <FormItem label="Translate" prop="Translate">
                <input type="text" v-model="data.Translate"/>
            </FormItem>
            <FormItem label="Username" prop="CreatedUser">
                <input type="text" v-model="data.CreatedUser"/>
            </FormItem>
            <FormItem>
                <Button color="primary"
                        :loading="isLoading"
                        @click="submit">submit
                </Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLoading: false,
                data: {
                    Word: null,
                    BookId: null,
                    Sentence: null,
                    Translate: null,
                    CreatedUser: 'mevlana',
                },
                rules: {
                    required: ['Word', 'BookId', 'CreatedUser'],
                }
            };
        },
        methods: {
            submit() {
                let validResult = this.$refs.form.valid();
                if (validResult.result) {
                    this.$Message('Successful verification');
                    this.isLoading = true;
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
                } else {
                    this.$Message.error(
                        `and also ${
                            validResult.messages.length
                            }. The error has not been verified.`
                    );
                }
            }
        }
    };
</script>
