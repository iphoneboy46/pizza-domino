import React from 'react';
import MapGG from '../../Map/Map'
import SelectOption from '../../SelectOption/SelectOption'


function Location() {
    return (
        <div className="pt-[100px] w-[100%] flex justify-end bg-yellowcustom">
            <MapGG />
            <SelectOption />
        </div>
    )
}

export default Location