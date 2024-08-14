import React, { InputHTMLAttributes } from 'react';

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {}

const Slider: React.FC<SliderProps> = (props) => {
    return (
        <input {...props} />
    );
}

export default Slider;
