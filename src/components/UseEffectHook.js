import { useState, useEffect } from 'react'

export default function useEffectHook() {

  const [date, setDate] = useState(new Date())
  const [count, setCount] = useState(0)

  // 1 Component did mount
  // 2 Component did update
  // 3 Component did unmount

  // if you pass an empty array as the second argument of useEffect hook
  // then it's the same as component did mount
  // useEffect(() => {
  //   console.log('component did mount')
  // }, [])

  // if we pass a value in that array, the useEffect becomes the component did update
  // useEffect(() => {
  //   console.log('you are now inside useEffect function');  
  // }, [count])

  // the return acts as the component did unmount
  // useEffect(() => {
  //   return () => {
  //     console.log('component will unmount');
  //   }
  // }, [])
  
  useEffect(() => {
    console.log('you are now inside useEffect function');
  
    return () => {
      console.log('component will unmount');
    }
  }, [])
  

  return(
    <div>

      {date.toLocaleString()}

      <button onClick={() => {
        setCount(count + 1)
      }}>
        Add 1
      </button>

      <br/>

      { count }
    </div>
  )
}