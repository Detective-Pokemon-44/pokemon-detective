import {useState} from 'react';

// simple hook that will accept a value and output it as it changes as well as has a reset function
export default function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue('');
    };
    return [value, handleChange, reset];
};