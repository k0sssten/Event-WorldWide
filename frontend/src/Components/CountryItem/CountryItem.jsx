import style from './CountryItem.module.css'
import { useRef } from 'react'


function CountryItem({ sity, divSelectCountry, setCountrySelectCurrent }) {
    const divOptionCountry = useRef(null)

    const addCountry = () => {
        const countryOption = divOptionCountry.current.innerText
        const countrySelect = divSelectCountry.current.innerText = countryOption
        setCountrySelectCurrent(countrySelect)
    }

    return (
        <div ref={divOptionCountry} onClick={() => addCountry()} className={style.CountryOption}>{ sity }</div>
    )
}

export default CountryItem