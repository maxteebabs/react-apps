import { Post } from "@/Models/Post";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async() : Promise<Array<Post>> => {
  try {
    const response = await fetch(POST_URL);
    if(!response.ok) throw new Error('Unable to load fetch all posts');
    return await response.json();  
  }catch(error) {
    console.log('error', error);
    return [];
  }
}

const postService = {
  fetchPosts
}

export default postService;
