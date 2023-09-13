import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Countries from './Countries';

interface propsInterface {
    theme: string,
    changeTheme: Function,
}

export default function Home(props: propsInterface) {

    // Choosen region
    const [currentRegion, setCurrentRegion] = React.useState("")
  
    // Input value
    const [inputText, setInputText] = React.useState("")
  
    return (
        <>
            <Nav theme={props.theme} changeTheme={props.changeTheme}/>
        
            <section className='bg-VeryLightGray dark:bg-VeryDarkBlue  pb-72 grid place-items-center'>
              <Form theme={props.theme} currentRegion={currentRegion} setCurrentRegion={setCurrentRegion} setInputText={setInputText}/>
              <Countries currentRegion={currentRegion} inputText={inputText}/>
            </section>
        </>
    )
}