import { ResponseImage } from '../../../types';
import { formaterDateHeure } from '../../../utils';
interface ResponseImageProps {
    data: ResponseImage
}

function ItemHistorique({ data }: ResponseImageProps) {
    return (
        <div className=' w-full h-40 flex justify-between bg-gray-block p-2 rounded-lg'>
            <img src={data?.img_base64} alt="" className=' w-36 h-36 rounded-lg ' />
            <div className=' flex flex-col gap-2.5 lg:text-md text-sm font-Poppins font-semibold text-dark-primary py-2.5 text-right '>
                <h1>
                    Malade : {data?.malade ? "malade" : "saint"}
                </h1>
                <h1>
                    Catégorie :     {data?.categorie}
                </h1>
                <h1>
                    Gravité :   {data?.gravite}
                </h1>
                <h1>
                    Précision :   {(data?.precision * 100).toFixed(2)}
                </h1>
                <p className=' text-sm text-gray-400 font-light'>
                    {formaterDateHeure(data?.time_created)}
                </p>
            </div>

        </div>
    )
}

export default ItemHistorique;
