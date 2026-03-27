// import { useState } from "react";

// function Login({ onLogin }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = () => {
//         if (!username || !password) {
//             alert("Please enter username and password");
//             return;
//         }

//         // ساده (برای پروژه)
//         if (username === "admin" && password === "1234") {
//             onLogin();
//         } else {
//             alert("Invalid credentials");
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 <h2>Login</h2>

//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </div>
//     );
// }

// export default Login;


import { useState } from "react";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // اعتبارسنجی ایمیل ساده
    const isValidEmail = (email) => {
        // بررسی ساده فرمت ایمیل
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // اعتبارسنجی ساده برای پروژه
        if (email === "admin@gmail.com" && password === "1234") {
            onLogin({ email }); // ایمیل را به parent می‌دهیم
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;