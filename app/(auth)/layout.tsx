import React from "react";

export default function SignupLayout ({children}:{children:React.ReactNode}) {
    return (
    <div>
        <header>
        20% off for next 3 days
        </header>
        {children}
    </div>)
}