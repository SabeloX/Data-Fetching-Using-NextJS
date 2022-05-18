import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { people: data }
    }
}

export default ({ people }) => {
    return(
        <div>
            <h1>This is the root for people</h1>
            {
                people.map(person => (
                    <a className={styles.single}>
                        <div key={person.id}>
                            <h3>{person.name}</h3>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}