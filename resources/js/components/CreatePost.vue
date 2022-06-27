<template>
    <div class="edit-block">
        <h3>Create Post</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addPost">
                    <div class="form-group mb-3">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" v-model="post.name" required>
                        <div class="alert alert-danger" role="alert" v-if="errors.name.length > 0" v-for="error_name in errors.name">
                            {{error_name}}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label>Text</label>
                        <textarea type="text" name="text" class="form-control" rows="4" cols="50" v-model="post.text" required></textarea>
                        <div class="alert alert-danger" role="alert" v-if="errors.text.length > 0" v-for="error_text in errors.text">
                            {{error_text}}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
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
                errors: false
            }
        },
        methods: {
            addPost() {
                this.axios
                    .post('https://localhost/api/news', this.post)
                    .then(response => {
                        this.$router.push({ name: 'home', params: {status: response.data} });
                    })
                    .catch((error) => {
                        if (error.response){
                            this.errors = error.response.data.errors;
                        }
                    })
                    .finally(() => {});
            }
        }
    }
</script>
