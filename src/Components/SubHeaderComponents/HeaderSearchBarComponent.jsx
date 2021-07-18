import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import selectors from "../../Redux/selectors";
import {useHistory} from "react-router-dom";


export default function HeaderSearchBarComponent() {


    const history = useHistory()
    const [searchFilter, setSearchFilter] = useState([])
    const [dropDown, setDropDown] = useState(false)
    const allList = useSelector(selectors.allLocations)

    function filterByValue(array, input) {
        if (input.length === 0) return []
        return array.filter(object =>
            (object.code || object.name).toLowerCase().includes(input.toLowerCase())).slice(0,10)
    }

    const pushToUrl = (CityCode, Division) => {
        history.push(`/AdministrativeDivisionComponent/${Division}/${CityCode}/now`)
    }

    return (
        <div className='searchBarWrapper'
             onBlur={() => setDropDown(false)}
        >
            <div className='searchBarInputCon'>
                <input
                    placeholder='Enter City Name'
                    onFocus={() => {
                        setDropDown(true)
                    }}
                    onChange={({target: {value}}) =>
                        setSearchFilter([...filterByValue(allList, value)])

                    }
                    className='searchBar' type="text">
                </input>
                <i className="fas fa-search"/>
            </div>
            <ul className='resultsConUl'>
                {
                    dropDown &&
                    searchFilter.map((e) => <li
                            key={e.code}
                            className='searchBarResultConLi'
                            onMouseDown={() => {
                                pushToUrl(e.code, e.administrativeDivision)
                            }}
                        >
                        {e.name}
                    </li>
                    )}
            </ul>
        </div>
    );
}