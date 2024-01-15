
import logo from "../assets/logo.svg";
import unityLogo from "../assets/unity_logo.svg";
interface LogoProps {
    className: string;
}

function Logo({ className = "" }: LogoProps) {
    return (
        <a href='#' className=' flex place-items-end gap-1'>
            <img className={`${className}`} src={logo} alt="Logo" />
            <img className={`h-7`} src={unityLogo} alt="logo" />
        </a>
    )
}

export default Logo;
