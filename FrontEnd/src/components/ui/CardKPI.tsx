
interface CardKPIProps {
    icon: any;
    title: string;
    value: number;
}

function CardKPI({ icon, title, value }: CardKPIProps) {
    return (
        <div
            className='flex flex-col gap-[10px] justify-center items-start px-[30px] py-[10px] rounded-[5px] bg-white shadow-simple w-[272px]'
        >
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full ">
                    {icon}
                </div>
                <h4 className='text-slate-700 text-32 font-bold font-Montserrat'>
                    {value}
                </h4>
            </div>
            <p className='text-gray-text font-Roboto text-16'>
                {title}
            </p>
        </div>
    )
}

export { CardKPI }
