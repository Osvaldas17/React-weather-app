import React, {useEffect} from 'react'
import selectors from "../../Redux/selectors";

import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../Redux/actions";
import {useHistory} from "react-router-dom";

export default function AdministrativeDivisionComponent() {

    const dispatch = useDispatch()
    const allList = useSelector(selectors.allLocations)
    const AdministrativeDivisionsList = useSelector(selectors.LocalAdministrationList)
    const {setLocalAdministrationList} = actions
    const history = useHistory()

    useEffect(() => {
        const administrativeDivisions = [...new Set(allList.map(item => item.administrativeDivision))]
        dispatch(setLocalAdministrationList(administrativeDivisions))
    },[])

    const pushToUrl = (Division) => {
        history.push(`/AdministrativeDivisionComponent/${Division}`)
    };

    return (
        <div className='AdministrativeDivisionsListWrapper'>
            <h2 className='h2Centered'>Administrative Divisions</h2>
            {AdministrativeDivisionsList.map((division) => <div
                key={division}
                className='AdministrativeDivisionDiv margin4'
                onClick={() => pushToUrl(division)}>
                <p className='AdministrativeDivisionP padding10'>{division}</p>
            </div>)}
        </div>
    )
}