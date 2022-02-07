//another example demonstrating Async(callback, promise, await)

const postsAwait = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPostsAwait() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post) => {
            output += post.title;
        });
        console.log(output);
    }, 1000)
}

function createPostAwait(postsAwait) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsAwait.push(postsAwait);

            const error = false;

            if(!error) {
                resolve("Bug free");
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

async function init() {
    await createPostPromise({title: 'Post 3', body: 'This is post 3'});
    getPostsAwait();
}

init();