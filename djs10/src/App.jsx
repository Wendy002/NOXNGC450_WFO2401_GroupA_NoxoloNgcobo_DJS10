import { useState,useEffect } from 'react'
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
            throw Error("Something went wrong, check resource")
        }

      } catch (err) {
        setError(err)        //set error to err
        
      }
    }
    addPosts()  // call function
  }, [])

     


  return (
   <h1>Posts</h1>
  
  )
}

export default App
