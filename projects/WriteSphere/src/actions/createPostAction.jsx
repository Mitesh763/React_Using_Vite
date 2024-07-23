export const createPostAction = async (data, addPost) => {
  const formDataObject = await data.request.formData();
  console.log("Object", formDataObject);
  const formData = Object.fromEntries(formDataObject);
  formData.tags = formData.tags.split(" ");
  console.log("DAtA", formData);

  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const post = await response.json();
    console.log("Fetched Data:", post);

    // Call the addPost method from the context
    addPost(post);

    return redirect("/");
  } catch (error) {
    console.error("Error adding post:", error);
    return 0;
  }
};
