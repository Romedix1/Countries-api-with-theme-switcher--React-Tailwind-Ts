import React from 'react';
import { Link } from 'react-router-dom'

interface propsInterface {
    currentRegion: string,
    inputText: string,
}

export default function Countries(props: propsInterface) {
    // Array of fetched countries
    const [countries, setCountries] = React.useState<any[]>([])

    // Fetch all countries
    const getCountries = async() => {
        try 
        {
            const res = await fetch('https://restcountries.com/v3.1/all')
            if(!res.ok) throw new Error('Could not fetch country information')
            
            const data = await res.json()
            await setCountries(data)
        }
        catch (err: any)
        {
            console.error(err)
        }
    }

    // Fetch filtered by region countries
    const getFilteredByRegionCountries = async() => {
        try
        {
            if(props.currentRegion==="") return
            const res = await fetch(`https://restcountries.com/v3.1/region/${props.currentRegion}`)
            
            if(!res.ok) throw new Error('Could not fetch country information')
                
            const data = await res.json()
            await setCountries(data)
        }
        catch (err: any)
        {
            console.error(err)
        }
    }

    // Fetch filtered by name countries
    const getFilteredByTermCountries = async() => {
        try
        {
            if(props.inputText === "") return
            const res = await fetch(`https://restcountries.com/v3.1/name/${props.inputText}`)
            
            if(!res.ok) throw new Error('Could not fetch country information')
                
            const data = await res.json()
            await setCountries(data)
        }
        catch (err: any)
        {
            console.error(err)
        }
    }

    React.useEffect(() => {
        getCountries()
        }, [])   

    React.useEffect(() => {
        getFilteredByRegionCountries()
    },[props.currentRegion])

    React.useEffect(() => {
        getFilteredByTermCountries()
    },[props.inputText])

    const countryBlocks = countries.map((country, index) => {
                return (
                    <Link key={index} to={`/details/${country.name.common}`} >
                        <article className='w-12/12 mb-4 mt-7 bg-white dark:bg-DarkBlue rounded-lg grid justify-items-center cursor-pointer'>
                            <div className='w-full '>
                                <img className='rounded-t-lg' src={country.flags.png} alt='country flag'/>
                            </div>
                            <div className='w-10/12'>
                                <h2 className='font-extrabold mt-6 text-xl dark:text-white'>{country.name.common}</h2>

                                <h3 className='text-md mt-4 dark:text-white'><span className='font-semibold'>Population:</span> {country.population.toLocaleString("en-US")}</h3>
                                <h3 className='text-md my-1 dark:text-white'><span className='font-semibold'>Region:</span> {country.region}</h3>
                                <h3 className='text-md mb-8 dark:text-white'><span className='font-semibold'>Capital:</span> {country.capital}</h3>
                            </div>
                        </article>
                    </Link>
        )})

    return (
        <section className='w-9/12 md:w-11/12 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 justify-items-center'>
            {countryBlocks}
        </section>
    )
}