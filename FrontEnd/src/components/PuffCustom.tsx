import React from 'react'
import { Puff } from 'react-loader-spinner'
interface PuffProps extends React.HTMLAttributes<HTMLElement> {

}
function PuffCustom(props: PuffProps) {
    return (
        <div {...props} className="h-[calc(100vh)] w-full flex flex-col justify-center items-center self-center justify-items-center bg-white">
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#FFAC00"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}

            />
        </div>
    )
}

export default PuffCustom
