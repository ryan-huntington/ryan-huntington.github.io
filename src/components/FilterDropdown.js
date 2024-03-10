import React, { useState } from 'react';
import './Projects.css'

const FilterDropdown = ({ options, selectedValues, setSelectedValues }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOptionToggle = (option) => {
        if (selectedValues.includes(option)) {
            setSelectedValues(selectedValues.filter(value => value !== option));
        } else {
            setSelectedValues([...selectedValues, option]);
        }
    };

    return (
        <div className="filter-dropdown">

            {/* {isOpen && (
                <select
                    multiple
                    readOnly
                    value={selectedValues}
                    onClick={(e) => handleOptionToggle(e.target.value)}
                >
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>Selected Filters:</span>
                <ul>
                    {selectedValues.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <span>&#9660;</span>
            </div> */}


        </div>
    );
};

export default FilterDropdown;
