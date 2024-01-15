
interface DropdownButtonProps {
    image: any,
    title: string,
}
function DropdownButton(props: DropdownButtonProps) {
    return (
        <div className=' flex place-items-center gap-2.5 bg-white px-2.5 py-1.5 rounded-lg cursor-pointer'>
            <img src={props.image} alt="flag" />
            <h1 className=' font-Montserrat font-normal text-md'>
                {props.title}
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                <path d="M5 5L10 -4.76837e-07H0L5 5Z" fill="#010B1A" />
            </svg>

        </div>
    )
}

export default DropdownButton
