import React from 'react'
import kategorije from '../kategorije.json'
import Kategorija from './Kategorija'
export default function Kategorije(props) {
    return (
        <>
            <div className='container'>
                <Kategorija kategorija={{
                    naziv: "Naziv kategorije",
                    min: "Min index",
                    max: "Max index"
                }} />
                {
                    kategorije.map(element => {
                        return (
                            <Kategorija kategorija={element} />
                        )
                    })
                }
            </div>
        </>
    )
}
