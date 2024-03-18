export function ColourList ({colour}) {
    return (
        <li>
            <p>{colour.id}</p>
            <p>{colour.name}</p>
        </li>
    )
}
export default ColourList