import { useEffect, useRef, useState } from 'react';
import { BsChevronRight } from "react-icons/bs";

function ItemMenu({ Menu, index, open }: any) {
    const [click, setClick] = useState(false);
    const [urlIsActive, setUrlIsActive] = useState(window.location.href);
    const [myChildrenIsActive, setMyChildrenIsActive] = useState(false);
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const ref = useRef(null);

    useEffect(() => {
        const isAnyChildActive = Menu?.items?.some((item: any) => window.location.href.endsWith(item?.path) || window.location.href.endsWith(item?.path + "#"));
        setMyChildrenIsActive(isAnyChildActive);
        setClick(isAnyChildActive);
    }, []);


    return (
        !Menu.header ?
            <>
                <a
                    key={index}
                    ref={ref}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setClick(!click)}
                    className={`flex font-Manrope rounded-md p-2 cursor-pointer hover:p-3 
                 place-items-center
                 hover:bg-dark-primary hover:text-white ${window.location.href.endsWith(Menu.path) ? "bg-dark-primary text-white" : " text-dark-primary"}
                  hover:shadow-sm hover:scale-105 transition-all duration-100 cursor-pointer text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
                    href={Menu.path ? Menu.path : "#"}
                >

                    {
                        isHovered || window.location.href.endsWith(Menu.path) ? Menu.iconLight : Menu.icon
                    }
                    <span className={`${!open && "hidden"} origin-left duration-200 flex justify-between  place-items-center flex-1`}>
                        {Menu.title}
                        {
                            Menu.dropdown ? <BsChevronRight className={`${open && click && myChildrenIsActive ? "rotate-90" : ""}`} size={15} /> : ""
                        }
                    </span>



                </a>
                {
                    Menu.dropdown ?
                        <div className={`${open && click ? "block transition-all ease-in-out duration-300" : "hidden"} w-full flex flex-col text-white font-Poppins text-sm pl-10 gap-2 pr-5  `}>

                            {
                                Menu.items.map((item: any) => (
                                    <a href={item?.path} className={`flex place-items-center justify-between hover:bg-white ${urlIsActive.endsWith(item.path) ? "bg-white text-slate-700" : ""} pr-2 py-2 pl-3 cursor-pointer rounded-lg hover:text-slate-700`}>
                                        {item.name}
                                        {/* <BsChevronRight size={15} /> */}
                                    </a>
                                ))
                            }
                        </div>
                        : ""
                }


            </>
            :
            <div className="h-8" >
                <h1 className={` ${!open ? "hidden " : "block px-3 py-2  uppercase text-md text-header-gray font-Manrope font-light"} `}>{Menu.title}</h1>
            </div>

    )
}

export default ItemMenu;