import React from 'react';
import DropDownListData from './DropDownListData.json';

export default function DropDownList(props: any) {

    const ListElements = DropDownListData.map((item: { id: React.Key, value: String; }) => {
        
        function selectRegion()
        {
            props.setCurrentRegion(item.value)
            props.setDropDownListStatus(false)
        }
        return (
            <li onClick={() => selectRegion()} key={item.id} className='text-VeryDarkBlueLight dark:text-White font-semibold px-4 text-md py-2 cursor-pointer hover:bg-gray-200 w-52'>{item.value}</li>
        )
    })
    return (
        <>
            {ListElements}
        </>
    )
}