import React from 'react'
import PuffCustom from '../../components/PuffCustom';
import { ResponseImage } from '../../types';
import { callApi } from '../../utils';
import ItemHistorique from './components/_itemHistorique';

function HistoriquePage() {
    const [listHistorique, setListhistorique] = React.useState<ResponseImage[]>();
    const [loading, setLoading] = React.useState<boolean>(false);
    async function getHistorique() {
        setLoading(true);
        const response = await callApi("api/historique/all", "get", null)
        if (response.status === 200) {
            setListhistorique(response?.data);
            setLoading(false);
        }
        else {
            setLoading(false);
        }
    }
    React.useEffect(() => {
        getHistorique();
    }, [])
    return (
        loading ?
            <PuffCustom />
            :
            <div className=' flex flex-col gap-5 pt-10'>
                {listHistorique && (
                    listHistorique.map((item) => (
                        <ItemHistorique data={item} />
                    ))
                )
                }
            </div>
    )
}

export default HistoriquePage;
