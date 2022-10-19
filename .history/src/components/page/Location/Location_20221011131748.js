import React from 'react';
import MapGG from '../../Map/Map'
import SelectOption from '../../SelectOption/SelectOption'


function Location() {
    return (
        <div className="pt-[100px] w-[100%] flex items-start justify-end">
            <MapGG />
            <SelectOption />
        </div>
    )
}

export default Location