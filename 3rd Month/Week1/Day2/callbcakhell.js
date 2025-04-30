function loginUser(username, callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback({ username });
    }, 1000);
}


function getUserProfile(user, callback) {
    setTimeout(() => {
        console.log("Fetched user profile");
        callback({ ...user, profile: "Full Profile Data" });
    }, 1000);
}



function getUserPosts(profile, callback) {
    setTimeout(() => {
        console.log("Fetched user posts");
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getPostComments(posts, callback) {
    setTimeout(() => {
        console.log("Fetched comments for posts");
        callback(["Nice post!", "Great read!"]);
    }, 1000);
}

// 🧨 Callback Hell in action
loginUser("john", function (user) {

    console.log(user);

    getUserProfile(user, function (profile) {
        console.log(profile);

        getUserPosts(profile, function (posts) {
            console.log(posts);

            getPostComments(posts, function (comments) {
                console.log(comments);

            })

        })

    })

});