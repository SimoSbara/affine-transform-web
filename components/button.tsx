"use client"

const Button = () => {

    const onClickCall = () => {
        console.log("ciao!!!");
    }

    return (<button className="bg-[#3467eb]" onClick={onClickCall}>Pulsante</button>)
}

export default Button