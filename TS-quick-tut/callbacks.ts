//another example demonstrating Async(callback, promise, await)

const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPosts() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post) => {
            output += post.title;
        });
        console.log(output);
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

createPost({title: 'Post 3', body: 'This is post 3'}, getPosts);
