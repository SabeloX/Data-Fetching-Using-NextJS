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

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: {
            person: data
        }
    }
}

const Person = ({ person }) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>Email: {person.email}</p>
            <p>Website: {person.website}</p>
            <p>City: {person.address.city}</p>
        </div>
    )
}

export default Person;