Let’s now convert the **callback hell example** into a version using **Promises with `.then()` and `.catch()`**.

---

### ✅ **Step-by-step Promise version (with `.then()` / `.catch()`)**

We’ll first convert each function to return a Promise:

```js
function loginUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ username });
    }, 1000);
  });
}

function getUserProfile(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user profile");
      resolve({ ...user, profile: "Full Profile Data" });
    }, 1000);
  });
}

function getUserPosts(profile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user posts");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function getPostComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comments for posts");
      resolve(["Nice post!", "Great read!"]);
    }, 1000);
  });
}
```

---

### 📦 Now using `.then()` and `.catch()` to chain them:

```js
loginUser("john")
  .then(user => getUserProfile(user))
  .then(profile => getUserPosts(profile))
  .then(posts => getPostComments(posts))
  .then(comments => {
    console.log("Final Result:", comments);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });
```

---

### ✅ Benefits of `.then()` / `.catch()`:

- No deeply nested functions.
- Each `.then()` step handles one task.
- `.catch()` handles errors anywhere in the chain.

---