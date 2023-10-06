import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;



// import "./App.css";
// import { useState } from "react";
// import { validateEmail } from "./utils";

// const PasswordErrorMessage = () => {
//     return (
//       <p className="FieldError">Password should have at least 8 characters</p>
//     )

// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");

//   const getIsFormValid = () => {
//     return (
//       firstName &&
//       validateEmail(email) &&
//       password.value.length > 7 &&
//       role !== 'role')
//   };

//   const clearForm = (e) => {
//     setFirstName("")
//     setLastName("")
//     setEmail("")
//     setPassword({
//       value: "",
//       isTouched: false
//     })
//     setRole("role")
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input
//               id="firstName"
//               placeholder="First name"
//               type="text"
//               value={firstName}
//               onChange={e => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="Field">
//             <label>
//               Last name
//             </label>
//             <input
//               id="lastName"
//               placeholder="Last name"
//               type="text"
//               value={lastName}
//               onChange={e => setLastName(e.target.value)}/>
//           </div>
//           <div className="Field">
//             <label >
//               Email address <sup>*</sup>
//             </label>
//             <input
//               id="email"
//               placeholder="Email address"
//               type="text"
//               value={email}
//               onChange={e => setEmail(e.target.value)}/>
//           </div>
//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password.value}
//               onChange={(e) => {
//                 setPassword({
//                   ...password, value: e.target.value})
//                 }}
//                 onBlur={() => {
//                   setPassword({ ...password, isTouched: true })
//                 }}
//                 placeholder="Password"
//             />
//             {password.isTouched && password.value.length < 8 ? (
//               <PasswordErrorMessage />
//             ) : null}
//           </div>
//           <div className="Field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select value={role} onChange={e => setRole(e.target.value)}>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;