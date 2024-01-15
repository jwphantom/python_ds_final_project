
import image from "../../assets/images/user_photo.png"

function ItemTable({ color }: any) {
    return (
        <div className={` grid grid-cols-3 ${color ? "bg-white-div" : ""} py-4 my-3 px-3 rounded-md`}>
            <div className='flex gap-3 '>
                <img src={image} alt="tof" className='h-10 w-10' />
                <div>
                    <h1 className=' font-Poppins font-bold text-xl'>4.3 Versorgerrechnung (FM)</h1>
                    <h4 className=' font-Poppins font-light'>
                        Today - 10:15
                    </h4>
                </div>
            </div>
            <div className=' text-center flex place-items-center justify-center text-lg font-light '>
                <h1>Gas, Strom, Wasser, etc</h1>
            </div>
            <div className=' flex justify-center   place-items-center gap-4'>
                <h1>
                    04
                </h1>
                <div className=' flex bg-cta-bleu place-items-center gap-4 text-white p-2 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M1.25 3.5625C1.25 2.94919 1.49364 2.36099 1.92732 1.92732C2.36099 1.49364 2.94919 1.25 3.5625 1.25H17.4375C18.0508 1.25 18.639 1.49364 19.0727 1.92732C19.5064 2.36099 19.75 2.94919 19.75 3.5625V17.4375C19.75 18.0508 19.5064 18.639 19.0727 19.0727C18.639 19.5064 18.0508 19.75 17.4375 19.75H3.5625C2.94919 19.75 2.36099 19.5064 1.92732 19.0727C1.49364 18.639 1.25 18.0508 1.25 17.4375V3.5625Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.71875 4.71875H8.1875V16.2812H4.71875V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.1307 4.71875H14.5994V11.6562H11.1307V4.71875Z" stroke="#F0F2F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1>
                        Kanban
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ItemTable
