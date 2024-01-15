import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    titre: any,
    theme: "primary" | "secondary"
}
function Button({ theme, titre, ...props }: ButtonProps) {
    return (
        <div {...props} className={` flex w-full cursor-pointer ${theme === "primary" ? " text-white   bg-primary " : " text-primary bg-white border-primary border-2 "}text-center py-3.5 text-lg font-semibold font-Montserrat uppercase rounded-sm `}>
            <h1 className=' w-full'>
                {titre}
            </h1>
        </div>
    )
}
Button.displayName = "Button";

export { Button };
