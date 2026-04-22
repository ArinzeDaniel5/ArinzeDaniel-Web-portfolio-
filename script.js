const tags = document.querySelectorAll('a');

tags.forEach(tag => {
    tag.addEventListener("click", (e) => {
        if (!tag.getAttribute("href") || tag.getAttribute("href") === "#") {
            e.preventDefault();
            alert("Live Demo not available at the moment, try again later");
        }
    });
});