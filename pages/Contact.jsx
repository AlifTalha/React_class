export default function Contact() {

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Send us a message:</p>
      
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name: </label>
          <input type="text" placeholder="Your name" required />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label>
          <input type="email" placeholder="Your email" required />
        </div>
        
        
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
