import { useState } from "react"
export function Container ({title, children}) {

    const [collapse, setCollapse] = useState (true)

    function showContent () {
        setCollapse(!collapse)
    }

    return (
        <div className="container">
            <h1 onClick={showContent}>{title}</h1>
            {collapse && <h2>{children}</h2>}
        </div>
    )
}