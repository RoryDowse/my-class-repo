document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });
});

// TODO: Create a variable that selects the main element
const getMainElement = document.getElementById("main");
// TODO: Create a function that builds an element and appends it to the DOM

function addArticle(blogData) {
  const container = document.createElement("article");
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("blockquote");
  const usernameElement = document.createElement("p");

  titleElement.textContent = blogData.title;
  contentElement.textContent = blogData.content;
  usernameElement.textContent = `Posted by: ${blogData.username}`;

  container.setAttribute("class", "article");
  titleElement.setAttribute("class", "");
  contentElement.setAttribute("class", "");
  usernameElement.setAttribute("class", "");

  container.appendChild(titleElement);
  container.appendChild(contentElement);
  container.appendChild(usernameElement);

  getMainElement.appendChild(container);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPost() {
  const storedBlog = localStorage.getItem("blogData");
  if (!storedBlog || storedBlog.trim() === "") {
    alert("No Blog posts yet...");
  }
}
noPost();
// TODO: Create a function that reads from local storage and returns the data
function renderBlogFromStorage() {
  const storedBlog = localStorage.getItem("blogData") || [];
  if (storedBlog) {
    const blogData = JSON.parse(storedBlog);
    console.log("Blog data retrieved from localStorage:", blogData);
    addArticle(blogData);
  } else {
    console.log("No blog data found in localStorage");
  }
}

// TODO: Call the function to render the list of blog posts
renderBlogFromStorage();

// return to this
