<template>
    <div>
        <h3>Show Post</h3>
        <div class="row">
            <div class="col-md-6">
                <h3>{{post.name}}</h3>
                <p><b>Created:</b> {{post.created_at}} <b>Created:</b> {{post.updated_at}}</p>
                <p>{{post.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.axios
                .get(`https://localhost/api/news/${this.$route.params.id}`)
                .then((res) => {
                    this.post = res.data;
                });
        }
    }
</script>
