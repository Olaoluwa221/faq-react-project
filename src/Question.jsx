import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [infoVisibility, setInfoVisibility] = useState(false)
    const [icon, setIcon] = useState('+');
    function changeVisibility()
    {
        switch(infoVisibility)
        {
            case true:  setInfoVisibility(false)
                        setIcon('+')
            break
            case false: setInfoVisibility(true)
                        setIcon('-')
            break
        }
        
    }
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={changeVisibility}>{icon}</button>
			</header>
			{/* make this render conditionally */}
			<p>{infoVisibility && info}</p>
		</article>
	)
}

export default Question
