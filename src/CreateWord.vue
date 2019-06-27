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
                <Select v-model="data.BookId" :datas="books" keyName="ID" titleName="Name" placeholder="Choose Book"
                        null-option-text="Words to Book, Remember"
                        @change="change">
                </Select>
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
            <FormItem label="Noun" prop="Noun">
                <input type="text" v-model="data.Noun"/>
            </FormItem>
            <FormItem label="Verb" prop="Verb">
                <input type="text" v-model="data.Verb"/>
            </FormItem>
            <FormItem label="Adverb" prop="Adverb">
                <input type="text" v-model="data.Adverb"/>
            </FormItem>
            <FormItem label="Adjective" prop="Adjective">
                <input type="text" v-model="data.Adjective"/>
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
    import Api from './api'

    export default{
        props: {bookId: Number},
        data() {
            return {
                isLoading: false,
                data: {
                    Word: null,
                    BookId: null,
                    Sentence: null,
                    Translate: null,
                    Noun: null,
                    Verb: null,
                    Adverb: null,
                    Adjective: null,
                    CreatedUser: 'mevlana',
                },
                rules: {
                    required: ['Word', 'BookId', 'CreatedUser'],
                },
                books: [],
                xd: [1,2,3,4,5],
            };
        },
        methods: {
            submit() {
                let validResult = this.$refs.form.valid();
                if (validResult.result) {
                    Api.CreateWord({
                        'Word': this.data.Word,
                        'BookId': this.data.BookId,
                        'Sentence': this.data.Sentence,
                        'Translate': this.data.Translate,
                        'WordType': {
                            'Noun': this.data.Noun,
                            'Verb': this.data.Verb,
                            'Adverb': this.data.Adverb,
                            'Adjective': this.data.Adjective
                        },
                        'CreatedUser': this.data.CreatedUser,
                        'UpdatedUser': this.data.CreatedUser
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
            },
            change(data) {
                console.log('changeData:', data);
            }
        },
        created() {
            this.data.BookId = this.bookId;
            Api.Books({'params': {'username': 'mevlana'}}).then(response => {
                this.books = response.data.data;
            })
        }
    };
</script>
