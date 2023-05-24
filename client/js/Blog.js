class Blog {

    constructor() {
        this.posts = []
    }

    getPost(index){
        return this.posts[index]
    }

    addPost(post){
        this.posts.push(post)
    }

    addPosts(posts){
        this.posts = posts
    }

}

export default Blog;