import { useState } from "react";
import User from "../User";
import "./styles.css";

const Form = () => {
    const [ data, setData ] = useState ({
        username: '',
        password: '',
    });

    const [ user, setUser ] = useState("");

    const handleChange = (e) => {
        setData({
            ...data, 
            [ e.target.name ]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(data.username)
    }

    return (
        user.length > 0
            ? <User user={data.username} />
            : (
                <>
                    <h3 className="form-title">LOGIN</h3>
                    <form onSubmit={(e)=> handleSubmit(e)}>
                        <input 
                            value={data.username}
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => handleChange(e)}
                        />
                        <input 
                            value={data.password}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            )
    );
}

export default Form;