<template>
    <div>

        <p>
            <Button color="blue" icon="h-icon-plus" @click="openBookModal = true">Add New Book</Button>
        </p>
        <Modal v-model="openBookModal">
            <CreateBook @close="openBookModal=false"></CreateBook>
        </Modal>

        <h-table :datas="books" stripe checkbox>
            <TableItem title="Id" align="center" prop="ID" sort="auto"></TableItem>
            <TableItem title="Name" align="center" prop="name" sort="auto"></TableItem>
            <TableItem title="Username" align="center" prop="created_user" sort="auto"></TableItem>
            <TableItem title="Created Date" align="center" prop="CreatedAt"></TableItem>
            <TableItem title="Last Modified" align="center" prop="UpdatedAt"></TableItem>
            <TableItem title="Word Count" align="center" prop="WordCount"></TableItem>
            <div slot="empty">Custom reminder: no data at this time</div>
        </h-table>
    </div>
</template>

<script>
    import Api from './api'
    import CreateBook from './CreateBook'

    export default {
        components: {
            CreateBook
        },
        data() {
            return {
                openBookModal: false,
                books: []
            };
        },
        created() {
            Api.Books({'params': {'username': '1'}}).then(response => {
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
