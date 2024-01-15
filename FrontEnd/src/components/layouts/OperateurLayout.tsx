
import { useState, ReactNode } from "react";
import logo from "../../assets/logo.svg";
import unitylogo from "../../assets/unity_logo.svg";
import { IoIosMenu } from "react-icons/io";
import ItemMenu from "./ItemMenu";
import NavBar from "./NavBar";
import { IoMdClose } from "react-icons/io";


interface OperateurLayoutProps {
  children: ReactNode;
}

const OperateurLayout: React.FC<OperateurLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [NavOpen, setNavOpen] = useState(false);


  const Menus = [
    {
      title: "Analyse", icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M1 1H7.37486V9.49981H1V1Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 13.75H7.37486V17.9999H1V13.75Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 9.5H17.9999V17.9998H11.625V9.5Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 1H17.9999V5.24991H11.625V1Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      iconLight: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M1 1H7.37486V9.49981H1V1Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 13.75H7.37486V17.9999H1V13.75Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 9.5H17.9999V17.9998H11.625V9.5Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 1H17.9999V5.24991H11.625V1Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      path: "/"
    },
    {
      title: "Historique ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M11.0002 2.00391H19.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 6.00391H16.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 12.0039H19.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 16H16.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 2.00001C1 1.73479 1.10536 1.48044 1.2929 1.2929C1.48044 1.10536 1.73479 1 2.00001 1H6.00006C6.26528 1 6.51963 1.10536 6.70717 1.2929C6.89471 1.48044 7.00007 1.73479 7.00007 2.00001V6.00006C7.00007 6.26528 6.89471 6.51963 6.70717 6.70717C6.51963 6.89471 6.26528 7.00007 6.00006 7.00007H2.00001C1.73479 7.00007 1.48044 6.89471 1.2929 6.70717C1.10536 6.51963 1 6.26528 1 6.00006V2.00001Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 12.0039C1 11.7387 1.10536 11.4843 1.2929 11.2968C1.48044 11.1093 1.73479 11.0039 2.00001 11.0039H6.00006C6.26528 11.0039 6.51963 11.1093 6.70717 11.2968C6.89471 11.4843 7.00007 11.7387 7.00007 12.0039V16.004C7.00007 16.2692 6.89471 16.5235 6.70717 16.7111C6.51963 16.8986 6.26528 17.004 6.00006 17.004H2.00001C1.73479 17.004 1.48044 16.8986 1.2929 16.7111C1.10536 16.5235 1 16.2692 1 16.004V12.0039Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      iconLight: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M11.0002 2.00391H19.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 6.00391H16.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 12.0039H19.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 16H16.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 2.00001C1 1.73479 1.10536 1.48044 1.2929 1.2929C1.48044 1.10536 1.73479 1 2.00001 1H6.00006C6.26528 1 6.51963 1.10536 6.70717 1.2929C6.89471 1.48044 7.00007 1.73479 7.00007 2.00001V6.00006C7.00007 6.26528 6.89471 6.51963 6.70717 6.70717C6.51963 6.89471 6.26528 7.00007 6.00006 7.00007H2.00001C1.73479 7.00007 1.48044 6.89471 1.2929 6.70717C1.10536 6.51963 1 6.26528 1 6.00006V2.00001Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 12.0039C1 11.7387 1.10536 11.4843 1.2929 11.2968C1.48044 11.1093 1.73479 11.0039 2.00001 11.0039H6.00006C6.26528 11.0039 6.51963 11.1093 6.70717 11.2968C6.89471 11.4843 7.00007 11.7387 7.00007 12.0039V16.004C7.00007 16.2692 6.89471 16.5235 6.70717 16.7111C6.51963 16.8986 6.26528 17.004 6.00006 17.004H2.00001C1.73479 17.004 1.48044 16.8986 1.2929 16.7111C1.10536 16.5235 1 16.2692 1 16.004V12.0039Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      path: "/historique"
    },
  ];



  return (
    <div className="">
      <div className=" w-full bg-gray-block fixed top-0 z-50 flex justify-between place-items-center px-2 lg:hidden">
        <img
          src={logo}
          className={`h-16 cursor-pointer duration-500 `}

        />
        {!NavOpen ? <IoIosMenu onClick={() => setNavOpen(true)} size={40} className={`text-dark-primary cursor-pointer  duration-500  ${!NavOpen && "rotate-[360deg]"} `} /> :
          <IoMdClose size={40} onClick={() => setNavOpen(false)} className={`text-dark-primary cursor-pointer duration-500 transition-all ${NavOpen && "rotate-[360deg]"} `} />}

      </div>

      <div className="flex lg:mt-0 mt-10 relative ">
        <div className={`${NavOpen ? "w-80  duration-300 transition-all ease-in-out absolute left-0 z-40" : "hidden "} lg:hidden bg-gray-block h-screen p-5  pt-8 relative duration-300`}>

          <div className="lg:flex gap-x-2 place-items-end relative hidden  ">
            <img
              src={logo}
              className={`h-20 cursor-pointer duration-500  ${open && "rotate-[360deg]"}`}
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-black origin-bottom  bottom-5 font-Manrope tracking-[4px] absolute  left-[60px]  uppercase font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >

              <img
                src={unitylogo}
                className={`cursor-pointer duration-500 w-40 ml-3`}
                onClick={() => setOpen(!open)}
              />

            </h1>
            {/* <img
src={manageDark}
alt="managerTheme"
className={` absolute  left-[210px] transition-all duration-300  ${!open && "scale-0 -translate-x-[210px] "}`}

/> */}
          </div>

          <ul className="lg:pt-16">
            {Menus.map((Menu, index) => (

              <ItemMenu
                key={index}
                Menu={Menu}
                index={index}
                open={open || NavOpen}
              />
            ))}
          </ul>
        </div>
        <div className={` ${open ? " w-80" : "w-20 "} lg:block hidden bg-gray-block h-screen p-5  pt-8 relative duration-300`}>

          <div className="lg:flex gap-x-2 place-items-end relative hidden  ">
            <img
              src={logo}
              className={`h-20 cursor-pointer duration-500  ${open && "rotate-[360deg]"}`}
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-black origin-bottom  bottom-5 font-Manrope tracking-[4px] absolute  left-[60px]  uppercase font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >

              <img
                src={unitylogo}
                className={`cursor-pointer duration-500 w-40 ml-3`}
                onClick={() => setOpen(!open)}
              />

            </h1>
            {/* <img
    src={manageDark}
    alt="managerTheme"
    className={` absolute  left-[210px] transition-all duration-300  ${!open && "scale-0 -translate-x-[210px] "}`}

  /> */}
          </div>

          <ul className="lg:pt-16">
            {Menus.map((Menu, index) => (

              <ItemMenu
                key={index}
                Menu={Menu}
                index={index}
                open={open}
              />
            ))}
          </ul>
        </div>
        <div hidden={NavOpen} className="lg:flex-1 w-full h-screen overflow-y-auto bg-anti-white">
          <div className=" lg:block hidden">
            <NavBar />
          </div>
          <div className=" py-5 px-10 w-full">
            {children}
          </div>

        </div>
      </div>

    </div>
  );
};
export default OperateurLayout;