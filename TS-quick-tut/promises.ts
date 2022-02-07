//another example demonstrating Async(callback, promise, await)

const postsPromise = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
];

function getPostsPromise() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post) => {
            output += post.title;
        });
        console.log(output);
    }, 1000)
}

function createPostPromise(postsPromise) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsPromise.push(postsPromise);

            const error = false;

            if(!error) {
                resolve("Bug free");
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

// createPostPromise({title: 'Post 3', body: 'This is post 3'})
// .then(getPostsPromise)
// .catch(err => console.log(err));

//Promise.all
const promist1 = Promise.resolve("Hi");
const promist2 = 7;
const promist3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "Bye");
})

Promise.all([promist3,promist2,promist1]).then(((values) => console.log(values)));