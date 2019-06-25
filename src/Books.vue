<template>
    <div>

        <p>
            <Button color="blue" icon="h-icon-plus" @click="openBookModal = true">Add New Book</Button>
        </p>
        <Modal v-model="openBookModal">
            <CreateBook @close="openBookModal=false"></CreateBook>
        </Modal>
        <Modal v-model="openWordModal">
            <CreateWord @close="openWordModal=false" :book-id="selectedBook"></CreateWord>
        </Modal>

        <Modal v-model="openBookDetailModal" v-bind="params">
            <div slot="header">Book Name Here</div>
            <div>Word list goes here</div>
            <div slot="footer">
                <button class="h-btn" @click="openBookDetailModal = false">Close</button>
                <button class="h-btn h-btn-primary" @click="openWordModal=true">Add Word</button>
            </div>
        </Modal>

        <h-table @trclick="trclick" :datas="books" stripe >
            <TableItem title="Id" align="center" prop="ID" sort="true"></TableItem>
            <TableItem title="Name" align="center" prop="Name" sort="true"></TableItem>
            <TableItem title="Username" align="center" prop="CreatedUser" sort="true"></TableItem>
            <TableItem title="Created Date" align="center" sort="true">
                <template slot-scope="{data}">
                    {{data.CreatedAt | formatDateTime}}
                </template>
            </TableItem>
            <TableItem title="Last Modified" align="center" sort="auto">
                <template slot-scope="{data}">
                    {{data.UpdatedAt | formatDateTime}}
                </template>
            </TableItem>
            <TableItem title="Word Count" align="center" sort="true">
                <template slot-scope="{data}">
                    {{data.Words.length}}
                </template>
            </TableItem>
            <div slot="empty">There is no book saved. ATM</div>
        </h-table>
    </div>
</template>

<script>
    import Api from './api'
    import CreateBook from './CreateBook'
    import CreateWord from './CreateWord'

    export default {
        components: {
            CreateBook,
            CreateWord
        },
        data() {
            return {
                params: {
                    closeOnMask: true,
                    hasMask: true,
                },
                openBookDetailModal: false,
                openBookModal: false,
                openWordModal: false,
                books: [],
                selectedBook: null
            };
        },
        methods: {
            trclick(data, event, index) {
                this.selectedBook = data.ID;
                this.openBookDetailModal = true
            }
        },
        created() {
            Api.Books({'params': {'username': 'mevlana'}}).then(response => {
                if (response.status === 200) {
                    this.$Message.success("Successfully retrieved books");
                    this.books = response.data.data;
                    console.log("Books: ", this.books)

                } else {
                    this.$Message.error("Error getting books")
                }
            })
        }

    };
</script>
