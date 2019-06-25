<template>
    <div>
        <Form ref="form" :label-width="100" :rules="rules" :model="data">
            <FormItem>
                <p>Create New Book</p>
            </FormItem>
            <FormItem label="Book Name" prop="bookName">
                <input type="text" v-model="data.bookName"/>
            </FormItem>
            <FormItem label="Username" prop="username">
                <input type="text" v-model="data.username"/>
            </FormItem>
            <FormItem>
                <Button color="primary"
                        :loading="isLoading"
                        @click="submit">Save
                </Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import Api from './api'

    export default {
        data() {
            return {
                isLoading: false,
                data: {
                    bookName: null,
                    username: "mevlana",
                },
                rules: {
                    required: ['bookName', 'username'],
                }
            };
        },
        methods: {
            submit() {
                let validResult = this.$refs.form.valid();
                if (validResult.result) {
                    Api.CreateBook({
                        'Name': this.data.bookName,
                        'CreatedUser': this.data.username,
                        'UpdatedUser': this.data.username
                    }).then(response => {
                        console.log(response);
                        this.close()
                    });
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
            },
            close() {
                this.$emit('close');
            }
        }
    };
</script>
