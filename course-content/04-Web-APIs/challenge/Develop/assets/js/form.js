// TODO: Create a variable that selects the form element
const getForm = document.getElementById("blogForm");
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

function formSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // if (!username || !title || !content) {
  //   alert("Please complete the form.");
  //   return;
  // }

  const blog = {
    username: username,
    title: title,
    content: content,
  };

  let redirectURL = "./blog.html";

  const redirectPage = function (url, blogData) {
    localStorage.setItem("blogData", JSON.stringify(blogData));
    location.assign(url);
  };
  redirectPage(redirectURL, blog);
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
getForm.addEventListener("submit", formSubmit);
