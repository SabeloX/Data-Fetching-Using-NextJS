import Link from "next/link";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { people: data }
    }
}

const People = ({ people }) => {
    return(
        <div>
            <h1>This is the root for people</h1>
            {
                people.map(person => (
                    <Link href={`/people/${person.id}`} key={person.id}>
                        <a className={styles.single}>
                            <h3>{person.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default People;