<template>
    <div>

        <p>
            <Button color="blue" icon="h-icon-plus" @click="openWordModal = true">Add New Word</Button>
        </p>
        <Modal v-model="openWordModal">
            <CreateWord @close="openWordModal=false"></CreateWord>
        </Modal>
        <Modal v-model="openWordDetailModal" v-bind="params">
            <div slot="header">Vue</div>
            <div :style="{'height': height ? '800px' : 'auto'}">
                <div>This is a custom vue popup</div>
                <div><Select dict="simple" v-width="160"></Select></div>
            </div>
            <div slot="footer">
                <button class="h-btn" @click="openWordDetailModal = false">Close</button>
                <button class="h-btn h-btn-primary" @click="$Message.success('hımm')">Dunno</button>
            </div>
        </Modal>

        <h-table @trclick="trclick" :datas="words" stripe >
            <TableItem title="Id" align="center" prop="ID" sort="true"></TableItem>
            <TableItem title="Name" align="center" prop="Word" sort="true"></TableItem>
            <TableItem title="Name" align="center" prop="Sentence" sort="true"></TableItem>
            <TableItem title="Name" align="center" prop="Translate" sort="true"></TableItem>
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
            <TableItem title="Related Book" align="center" sort="true">
                <template slot-scope="{data}">
                    {{data.BookId}}
                </template>
            </TableItem>
            <div slot="empty">There is no book saved. ATM</div>
        </h-table>
    </div>
</template>

<script>
    import Api from './api'
    import CreateWord from './CreateWord'

    export default {
        components: {
            CreateWord
        },
        data() {
            return {
                params: {
                    closeOnMask: true,
                    hasMask: true,
                },
                openWordDetailModal: false,
                openWordModal: false,
                words: []
            };
        },
        methods: {
            trclick(data, event, index) {
                this.openWordDetailModal = true;
            }
        },
        created() {
            Api.Words({'params': {'username': 'mevlana'}}).then(response => {
                if (response.status === 200) {
                    this.$Message.success("Successfully retrieved words");
                    this.words = response.data.data;
                    console.log("Words: ", this.books)

                } else {
                    this.$Message.error("Error getting words")
                }
            })
        }

    };
</script>
