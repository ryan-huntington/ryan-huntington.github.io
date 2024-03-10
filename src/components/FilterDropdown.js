import React from 'react';

const FilterDropdown = ({ options, selectedValues, setSelectedValues }) => {
    const handleOptionToggle = (option) => {
        if (selectedValues.includes(option)) {
            setSelectedValues(selectedValues.filter(value => value !== option));
        } else {
            setSelectedValues([...selectedValues, option]);
        }
    };

    return (
        <div className="filter-dropdown">
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
        </div>
    );
};

export default FilterDropdown;
