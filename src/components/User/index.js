import "./styles.css";

const User = ({user}) => {
    return (
        <section className="user">
            <p><b>User:</b> {user}</p>
        </section>
    );
}

export default User;