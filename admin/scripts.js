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


async function setup(){
    const posts = await getPosts()
    const tbody = document.querySelector("tbody")
    const confirmBtn = document.querySelector("#create_post button#confirm")

    tbody.innerHTML = "";
    posts.forEach(post => {
        const trTmpl = `
                <tr>
                    <th scope="row">${post.id}</th>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>${post.userId}</td>
                    <td>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit_post"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
                `
        tbody.innerHTML += trTmpl
    });


    confirmBtn.addEventListener('click', async () => {
    
        const postTitle = document.querySelector("#create_post #post_title")
        const postBody = document.querySelector("#create_post #post_body")

        console.log(postTitle)
        console.log(postBody)
        console.log("Confirmed")

        url = "http://localhost:3000/posts"

        data = {
            "title": postTitle.value,
            "body": postBody.value,
            "userId": 2 
        }

        // Post a new post
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })


        // Hide modal with bootstrap
    
    })

    
}

setup()

     