document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("posts-container");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        container.innerHTML = "<p>No posts yet.</p>";
        return;
    }

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
        <h2>${post.title}</h2>
        ${post.image ? `img src="${post.image}" alt="Post image style="max-width: 100%; height: auto;">` : ""}
        <p>${post.content.substring(0, 100)}...</p>
        <a href="post.html?id=${post.id}">View Post</a>
        `;
        
        container.appendChild(postElement);
    });
});