import { useParams } from 'react-router-dom'

export default function User() {
  const { username } = useParams()

  return (
    <div>
      <h1>User Profile: {username}</h1>
      <p>This is a dynamic route. The username comes from the URL.</p>
      <p>Current URL: /user/{username}</p>
      
      <h2>Try These URLs:</h2>
      <ul>
        <li>/user/john</li>
        <li>/user/jane</li>
        <li>/user/bob</li>
      </ul>
    </div>
  )
}
