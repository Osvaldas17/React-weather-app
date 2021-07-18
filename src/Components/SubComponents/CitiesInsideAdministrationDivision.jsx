import React, {useEffect} from 'react'
import selectors from "../../Redux/selectors";

import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../Redux/actions";
import {useHistory, useParams} from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";


export default function CitiesInsideAdministrationDivision() {

    const {Division} = useParams();
    const dispatch = useDispatch()
    const allList = useSelector(selectors.allLocations)
    const citiesInsideDivision = useSelector(selectors.citiesInsideDivision)
    const {setCitiesInsideDivision} = actions
    const history = useHistory()


    useEffect(() => {
        const citiesInsideAdministrativeDivision = [...new Set(allList.filter((e) => e.administrativeDivision === Division))]
        dispatch(setCitiesInsideDivision(citiesInsideAdministrativeDivision))
    },[allList])

    const pushToUrl = (CityCode) => {
        history.push(`/AdministrativeDivisionComponent/${Division}/${CityCode}/now`)
    };

    return (
        <div className='AdministrativeDivisionsListWrapper'>
            <h2 className='h2Centered'>{Division}</h2>
            {citiesInsideDivision.map((e) => <div
                key={e.code}
                onClick={() => pushToUrl(e.code)}
                className='AdministrativeDivisionDiv margin4'>
                <p className='AdministrativeDivisionP padding10'>{e.name}</p>
            </div>)}
        </div>
    )
}