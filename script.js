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
        <p>${post.content.substring(0, 100)}...</p>
        <a href="post.html?{post.id}">View POst</a>
        `;
        container.appendChild(postElement);
    });
});