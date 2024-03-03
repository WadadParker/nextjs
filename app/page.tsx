import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
  // const response = await axios.get("http://localhost:3000/api/user")
  // Do the above is wrong because you are calling your nextjs server from your nextjs server
  return response.data;
}

// Async component to do async operations in top of a component
export default async function Home() {
  const userDetails = await getUserDetails();
  // This is not possible in react, react does not support it
  // But now it is the STANDARD way to fetch date in Netx.js
  return (
    <div>
      hi there
      <aside>
      <h1>{userDetails?.email}</h1>
      {userDetails?.username}
      </aside>
    </div>
  );
}
