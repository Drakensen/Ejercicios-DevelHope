export function ColourList ({colour}) {
    return (
        <li>
            <p>{colour.id}</p>
            <p>{colour.name}</p>
        </li>
    )
}

export function ColourList2 ({colours}) {
    return (
        <ul>
            {colours.map ((colours) => (
                <ColourList key={colours.name} colours={colours} />
            ))}
        </ul>
    )
}

export default ColourList