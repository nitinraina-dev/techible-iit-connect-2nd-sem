Here's a **realistic example of callback hell** — simulating a user login flow with nested asynchronous steps:

---

### 🔥 **Callback Hell Example: User Login Flow**

```js
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
loginUser("john", function(user) {
  getUserProfile(user, function(profile) {
    getUserPosts(profile, function(posts) {
      getPostComments(posts, function(comments) {
        console.log("Final Result:", comments);
      });
    });
  });
});
```

---

### 🔍 What's wrong with this?

- Hard to **read**.
- Harder to **debug**.
- Difficult to **maintain** or **add features**.

---




Perfect! Let's take the **callback hell example** we saw earlier, and rewrite it using **`async/await`**, which is the cleanest and most readable way to handle asynchronous logic in modern JavaScript.

---

### 🔁 Recap: Callback Hell Example

```js
loginUser("john", function(user) {
  getUserProfile(user, function(profile) {
    getUserPosts(profile, function(posts) {
      getPostComments(posts, function(comments) {
        console.log("Final Result:", comments);
      });
    });
  });
});
```

This is hard to read, debug, and extend 😩

---

## ✅ Step 1: Turn each function into a Promise-based one

We'll reuse this:

```js
function loginUser(username) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ username });
    }, 1000);
  });
}

function getUserProfile(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched user profile");
      resolve({ ...user, profile: "Full Profile Data" });
    }, 1000);
  });
}

function getUserPosts(profile) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched user posts");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function getPostComments(posts) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched comments for posts");
      resolve(["Nice post!", "Great read!"]);
    }, 1000);
  });
}
```

---

## ✅ Step 2: Use `async/await` to replace the nested callbacks

```js
async function run() {
  try {
    const user = await loginUser("john");
    const profile = await getUserProfile(user);
    const posts = await getUserPosts(profile);
    const comments = await getPostComments(posts);

    console.log("Final Result:", comments);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

run();
```

---

### 🔍 Why this is better:

- Looks **synchronous**, reads **top to bottom**
- Easy to add `try/catch` for error handling
- Very **maintainable**

---
