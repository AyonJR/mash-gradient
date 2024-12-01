// ? this is the file for all of the api requests, we can make all the api request here , which will much managable and efficent way to call api  


export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};


// we can add more api's here 
