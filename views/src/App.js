import React, { useEffect } from "react";
import { toast } from "react-toastify";

import {
    asyncsignup,
    asyncloaduser,
    asyncsignin,
    asyncsignout,
    asyncloadblogs,
} from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./components/Editor";
const App = () => {
    const notify = () => toast("Wow so easy!");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // console.log(error);
    // console.log(isAuthenticated);
    useEffect(() => {
        dispatch(asyncloaduser());
        dispatch(asyncloadblogs());
    }, []);

    const registerUser = () => {
        dispatch(
            asyncsignup({
                name: "Ravi Kumar",
                username: "ravi_kumar",
                email: "ravi@kumar.com",
                password: "Aa@123",
            })
        );
    };

    const loginUser = () => {
        dispatch(
            asyncsignin({
                email: "ravi@kumar.com",
                password: "Aa@123",
            })
        );
    };

    const signoutUser = () => {
        dispatch(asyncsignout());
    };

    return (
        <div>
            <button onClick={notify}>Call Toast</button>
            <button onClick={registerUser}>Signup</button>
            <button onClick={loginUser}>Signin</button>
            <button onClick={signoutUser}>Signout</button>
            <hr />
            <Editor />
            <hr />
            {user &&
                user.blogs &&
                user.blogs.map((blog) => (
                    <div
                        key={blog._id}
                        dangerouslySetInnerHTML={{ __html: blog.data }}
                    ></div>
                ))}
        </div>
    );
};

export default App;
