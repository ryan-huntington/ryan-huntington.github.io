import React, { useState } from 'react';
import './Projects.css'
import Select from "react-select"

const FilterDropdown = ({ options, selectedValues, setSelectedValues, placeholder }) => {

    const handleChange = (selectedOptions) => {
        setSelectedValues(selectedOptions.map(option => option.value));
    };

    const selectedOptions = selectedValues.map(value => ({ value, label: value }));
    return (
        <div className="filter-dropdown">

            <Select
                options={options.map(option => ({ value: option, label: option }))}
                value={selectedOptions}
                onChange={handleChange}
                isMulti
                hideSelectedOptions={false}
                closeMenuOnSelect={false}
                placeholder={placeholder}
                classNamePrefix='filter'
            />


        </div>
    );
};

export default FilterDropdown;
