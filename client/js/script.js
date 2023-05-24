console.log("Working...")

import Blog from './Blog.js'
import Post from './Post.js'

// Step 1: get all posts from external api
async function getPosts(){
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}


async function getAuthor(userId){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return res.json()
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup() {
    const blog = new Blog()
    const posts = await getPosts()

    posts.forEach((post) => {
        const newPost = new Post(post.title,post.body, post.userId)
        blog.addPost(newPost)
    });
    

    // const postElements = document.querySelectorAll(".post-preview")
    // 4
    const blogContent = document.querySelector("#blog_content")

    // console.log(postElements.length)

    blogContent.innerHTML = ""

    let orderedPosts = blog.posts.sort((a,b)  =>  (a.id < b.id) ? 1 : -1)

    orderedPosts.forEach((post, index) => {
        // .then( postHtml => {
            blogContent.innerHTML += post.getHtml()
            blogContent.innerHTML += `<hr class="my-4" />`
        // })
    })



    // postElements.forEach(async (element,index) => {
        // Method 1
        // const h2 = element.firstElementChild.children[0]
        // const h3 = element.firstElementChild.children[1]

        // h2.innerText = blog.posts[index].getTitle()
        // // // console.log( blog.posts[index].getDescription())
        // if(h3){
        //     let desc =  blog.posts[index].getDescription().replace("\n","<br>")
        //     desc = (desc.length > 100) ? desc.slice(100) + "..." : desc
        //     h3.innerHTML = desc

        // }
        // console.log(blog.getPost(index))
        // Method 2
        // element.outerHTML = await blog.posts[index].getHtml()

    // });


    // deleteBtn.addEventListener("click",() => {
    //     // blog.posts.find((post) => post.id == 1 ).destroy()
    //     // postElements.find(postEl => postEl.id === 1).remove()
    // })


    // blog.addPosts(posts)
    // console.log(blog.posts)

}


setup()


export  { getAuthor , getPosts }






























// const post1 = new Post("sadasdasd","asdasdasd")

// console.log(post1)

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => { return res.json() })
// .then((data) => { console.log(data) })
// .catch((err) => { console.log("There was an error",err) })




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data) => data.json())
// .then((data) => {
//     const h1 = document.querySelector("h1")

//     data.forEach(post => {
//         h1.innerHTML += `
//         <h2>${post.title}</h2>
//         <p>${(post.body.length > 100) ? post.body.slice(100) + "..." : post.body}</p>
//         `
        
//     });


//     console.log(data)
// })

// fetch('https://jsonplaceholder.typicode.com/posts/50')
// .then((data) => data.json())
// .then(data => console.log(data))