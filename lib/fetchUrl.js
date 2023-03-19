export async function loadProperties() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://localhost:3000/properties/get-all')
    const data = await res.json()
  
    return data
}