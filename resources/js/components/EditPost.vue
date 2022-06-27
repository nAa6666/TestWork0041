<template>
    <div>
        <h3 class="text-center">Edit Post</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updatePost">
                    <div class="form-group mb-3">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="post.name">
                        <div class="alert alert-danger" role="alert" v-if="errors.name.length > 0" v-for="error_name in errors.name">
                            {{error_name}}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Text</label>
                        <textarea type="text" class="form-control" rows="4" cols="50" v-model="post.text"></textarea>
                        <div class="alert alert-danger" role="alert" v-if="errors.text.length > 0" v-for="error_text in errors.text">
                            {{error_text}}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {},
                errors: false,
            }
        },
        created() {
            this.axios
                .get(`https://localhost/api/news/${this.$route.params.id}`)
                .then((res) => {
                    this.post = res.data;
                });
        },
        methods: {
            updatePost() {
                this.axios
                    .patch(`https://localhost/api/news/${this.$route.params.id}`, this.post)
                    .then((response) => {
                        this.$router.push({ name: 'home', params: {status: response.data} });
                    }).catch((error) => {
                        if (error.response){
                            this.errors = error.response.data.errors;
                        }
                    });
            }
        }
    }
</script>
