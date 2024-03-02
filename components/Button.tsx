"use client"
// Now this component is client component, your signin component & your signing page
// is still SEO optimized. Defere client components like this as much as possible
// Remember, server components cannot be children of client components directly, but there
// is a workaround for this, read vercel issue here : https://github.com/vercel/next.js/discussions/43153
const Button = () => {
    const clickHandler=()=> console.log("clicked");
    return (
        <button onClick={clickHandler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    )
}

export default Button