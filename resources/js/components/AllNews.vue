<template>
    <div class="news-list">
        <div class="alert alert-danger" role="alert" v-if="errors.name.length > 0" v-for="error_name in errors.name">
            {{error_name}}
        </div>
        <div class="alert alert-success" role="alert" v-if="success">
            {{success}}
        </div>
        <h2>News List</h2>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in news">
                <td>{{ index + 1 }}</td>
                <td class="text-primary"><router-link :to="{name: 'post', params: { id: post.id }}">{{ post.name }}</router-link></td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger d-inline-block" @click="deletePost(post.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news: [],
                errors: false,
                success: false
            }
        },
        created() {
            this.axios
                .get('https://localhost/api/news/')
                .then(response => {
                    this.news = response.data;
                    this.success = this.$attrs.status;
                });
        },
        methods: {
            deletePost(id) {
                this.axios
                    .delete(`https://localhost/api/news/${id}`)
                    .then(response => {
                        let i = this.news.map(data => data.id).indexOf(id);
                        this.news.splice(i, 1);
                        this.success = response.data;
                    }).catch((error) => {
                        if (error.response){
                            this.errors = error.response.data.errors;
                        }
                    });
            }
        }
    }
</script>
