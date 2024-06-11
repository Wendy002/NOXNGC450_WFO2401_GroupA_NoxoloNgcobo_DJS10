
import React from 'react'


function App() {
  const [posts, setPosts] = React.useState([]) // initialise state for  blog posts
  const [error, setError] = React.useState(null) //  initialise state for  error messages

  React.useEffect(()=>{    //set use effect hook for handling api calls
    async function addPosts(){
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')          //fetch  data and set it to setposts
        const data = await response.json()
        setPosts(data)

        if (!response.ok) {
            throw Error("Data Fetching Failed")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      }
    }
    addPosts()  // call function
   }, [])

  if (error) {                 // if error display this message
    return <h1 className='center-msg'>{error.message}</h1>
  }



  return (
    <div>
      <h1>Posts</h1>
      <ul className='remove-list-style'>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.id}<span>.  </span>{post.title}</h3>
            <p>{post.body}</p>

          </li>
        ))}
      </ul>
    </div>
  
  
  )
}

export default App
