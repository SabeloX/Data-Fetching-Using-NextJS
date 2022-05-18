export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        paths: data.map(person => {
            return {
                params: { id: person.id.toString()}
            }
        }),
        fallback: false
    }
}

export default ({ person }) => {
    return (
        <div>
            <h1>Person Details</h1>
        </div>
    )
}