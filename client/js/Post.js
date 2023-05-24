import { getAuthor } from "./script.js" 

class Post {

    constructor(title, description, authorId = ""){
        this._title = title
        this._description = description
        this.authorId = authorId
        this.getAuthorData()
    }


    getTitle(){
        return this._title
    }

    
    getDescription(){
        return this._description
    }

    getAuthorData() {
        // return await getAuthor(this.authorId)
        getAuthor(this.authorId).then((data) => { 
           return this.author = data
        })
        .catch(err => console.log(err))
        
    }

    // destroy(){
    //     return null
    // }

    getHtml(){
        const description = this._description.replace("\n","<br>")
        // const author = {name: "Yuri"}
        
        return `
        <div class="post-preview">
            <a href="post.html">
                <h2 class="post-title">${this._title}</h2>
                <h3 class="post-subtitle">${(description.length > 100) ? description + "..." : description }</h3>
            </a>
            <p class="post-meta">
                Posted by
                <a href="#!">${this.author?.name}</a>
                on September 24, 2023
            </p>
        </div>
        `
    }
}

export default Post;