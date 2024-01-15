

function SearchInput() {
    return (
        <div className='flex border border-gray-300 rounded-md w-full place-items-center px-1.5 gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M1 7.66667C1 8.50932 1.16597 9.34371 1.48844 10.1222C1.81091 10.9007 2.28356 11.6081 2.8794 12.2039C3.47524 12.7998 4.18261 13.2724 4.96111 13.5949C5.73962 13.9174 6.57402 14.0833 7.41667 14.0833C8.25932 14.0833 9.09371 13.9174 9.87222 13.5949C10.6507 13.2724 11.3581 12.7998 11.9539 12.2039C12.5498 11.6081 13.0224 10.9007 13.3449 10.1222C13.6674 9.34371 13.8333 8.50932 13.8333 7.66667C13.8333 6.82402 13.6674 5.98962 13.3449 5.21111C13.0224 4.43261 12.5498 3.72524 11.9539 3.1294C11.3581 2.53356 10.6507 2.06091 9.87222 1.73844C9.09371 1.41597 8.25932 1.25 7.41667 1.25C6.57402 1.25 5.73962 1.41597 4.96111 1.73844C4.18261 2.06091 3.47524 2.53356 2.8794 3.1294C2.28356 3.72524 1.81091 4.43261 1.48844 5.21111C1.16597 5.98962 1 6.82402 1 7.66667Z" stroke="#C0C9E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 17.75L12 12.25" stroke="#C0C9E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input type="text" placeholder='Search ...' className=' appearance-none  focus:outline-none flex-1 bg-transparent py-2 text-gray-400 ' />
        </div>
    )
}

export default SearchInput;
