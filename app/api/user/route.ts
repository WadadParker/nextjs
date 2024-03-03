export async function GET() {
    return Response.json({ username: "Wadad", email: "wadad@gmail.com" })
  }

export async function POST() {
    return Response.json({username:"Wadad",email:"wadadparker@gmail.com"})
}

// Define all the API types GET, POST, DELETE, PUT whatever here as functions
// Like damn man, what a convinient way to do api calls