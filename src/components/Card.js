import React, {useState} from 'react'
import './Card.css'

const Card = ({name, img, options}) => {
    const [info, setinfo] = useState(true)

    const handleClick = () => {
        setinfo(!info)
    }
    return (
            <div className="card" key={name} onClick={handleClick}>
                {info?(
                    <div className="logo">
                        <img src={img} alt={name} />
                        <h4>{name.toUpperCase()}</h4>
                    </div>
                ):(
                    <div>
                        <ul>
                            {options.map((item, index) => {
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
    )
}

export default Card
