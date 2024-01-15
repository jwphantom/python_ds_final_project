import React from 'react';
import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    validationSchema?: RegisterOptions;
    errors: FieldErrors;
    inputName: string;
    icon?: string;
    label: string
}

const Input = ({ register, inputName, label, type, icon, errors, validationSchema, ...props }: InputProps) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const ref = React.useRef(null);
    return (
        <React.Fragment>
            <div className='relative border rounded-md flex  peer-focus:border-slate-500 w-full'>
                <input
                    {...register(inputName, validationSchema)}
                    ref={ref}
                    {...props}
                    type={type === "password" ? showPassword ? "text" : "password" : type}
                    className="
                         block
                         pl-8
                         pr-6
                         pt-5
                         pb-1
                         grow
                         font-light
                         text-md bg-white rounded-md
                        text-slate-700 text-md appearance-none focus:outline-none focus:ring-0 peer
                        "
                    placeholder=''

                />
                <label htmlFor={props?.id}
                    className={` absolute
                            text-md
                          text-zinc-400
                            duration-150
                            transform
                            scale-75
                            top-2
                       
                            ${ref.current !== "" ? " -translate-y-2 font-light" : "translate-y-2"}
                            origin-[0]
                            left-6
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-focus:scale-75
                            peer-focus:font-light
                            peer-focus:-translate-y-2 flex
                             `}
                >
                    <span className='mr-3 mt-1 '>{icon}</span> {label}
                </label>
                {(type === "password") ?
                    showPassword ?
                        <IoIosEyeOff
                            size={30}
                            onClick={() => setShowPassword(false)}
                            className={`
                            text-md
                         cursor-pointer
                        text-zinc-400
                            duration-150
                            transform
                            scale-75
                            top-2
                            z-10
                            translate-y-2
                            origin-[0]
                            right-6
             `}
                        /> :
                        <IoMdEye
                            size={30}
                            onClick={() => setShowPassword(true)}
                            className={`
                        text-md
                     cursor-pointer
                    text-zinc-400
                        duration-150
                        transform
                        scale-75
                        top-2
                       
                        translate-y-2
                        origin-[0]
                        right-6
         `}
                        /> : null
                }


            </div>
            {(errors[inputName] && errors[inputName]?.message) &&
                <p className="">
                    <span
                        className={`text-[14px] font-[400] text-error/95`}
                    >
                        {errors[inputName]?.message as string}
                    </span>
                </p>
            }
        </React.Fragment>

    )
}
Input.displayName = "Input"
export { Input };
