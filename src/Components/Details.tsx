import React from 'react';
import Nav from './Nav'
import { useParams, Link } from 'react-router-dom';

export default function Details(props: any) {

    // Fetched country
    const [country, setCountry] = React.useState<any>([])

    // Currencies from country array
    const [currencies, setCurrencies] = React.useState<any>([])

    // Languages from country array
    const [languages, setLanguages] = React.useState<any>([])

    const {name} = useParams()

    // Fetch clicked country
    const getCountryByName = async() => {
        try 
        {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            if(!res.ok) throw new Error('Could not fetch country information')
            
            const data = await res.json()

            await setCountry(data)
            await setLanguages(Object.values(data[0].languages))
            await setCurrencies(Object.values(data[0].currencies))


        }
        catch (err: any)
        {
            console.error(err)
        }
    }


    React.useEffect(() => {
        getCountryByName()
    }, [name])


    // Map country languages
    const mappedLanguages = languages.map((element: any, index: number) => {
        return (
            languages[index] + ", "
        )
    })

    // Map country currencies
    const mappedCurrencies = currencies.map((element: any, index: number) => {
        return (
            currencies[index].name + ", "
        )
    })
    
    return (
        <>
            <Nav theme={props.theme} changeTheme={props.changeTheme}/>
            <section className='bg-VeryLightGray dark:bg-VeryDarkBlue pt-8 grid justify-items-start lg:min-h-screen lg:block'>
                <div className='flex bg-White dark:bg-DarkBlue  w-fit shadow-xl ml-6 px-4 py-1 justify-center countrys-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${props.theme==="light" ? "#000" : "#fff"}`} viewBox="0 0 24 24" className='w-6'><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"></rect><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"></path></g></g></svg>
                    <Link to="/"><p className='ml-1 text-VeryDarkBlueLight dark:text-White font-semibold'>Back</p></Link>
                </div>
                <div className='grid place-items-center w-screen'>
                {country.map((item: any, index: number) => {

                    return (
                        <article key={index} className='grid place-items-center lg:place-items-start w-11/12 mt-12 lg:grid-cols-2'>
                            <img className='w-full sm:w-10/12 md:w-8/12 lg:w-11/12 lg:mt-11 xl:max-w-[750px]' src={item.flags.png} alt='country flag'/>

                            <div className='w-full'>
                                <h2 className='text- dark:text-White font-extrabold text-2xl mt-10 mb-6'>{item.name.common}</h2>

                                <div className='lg:grid lg:grid-cols-2'>
                                    <div>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Native Name: </span>{item.name.common}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Population: </span>{item.population.toLocaleString("en-US")}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Region: </span>{item.region}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Sub Region: </span>{item.subregion}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit mb-12'><span className='font-semibold'>Capital: </span>{item.capital}</p>
                                    </div>
                                    <div className='lg:ml-10 xl:ml-0'>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Top Level Domain: </span>{item.tld}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Currencies: </span>{mappedCurrencies}</p>
                                        <p className='text-lg my-1 dark:text-White w-fit'><span className='font-semibold'>Languages: </span>{mappedLanguages}</p>
                                    </div>
                                </div>
                                <h3 className='font-semibold text-xl dark:text-White mt-8 lg:mt-2'>Border Countries:</h3>
                                
                                <ul className='grid w-fit align-items-center grid-cols-4 sm:grid-cols-7 md:grid-cols-5 gap-1 mt-1 mb-10'>
                                    {item.borders?.map((border: string, index: number) => {return (<li key={index} className='bg-white mt-4 dark:bg-DarkBlue w-fit px-5 py-1 shadow-xl rounded-sm text-VeryDarkBlueLight dark:text-White'>{border}</li>)})}
                                </ul>
                            </div>
                        </article>
                    )
                })}
                </div>
            </section>
                
        </>
    )
}