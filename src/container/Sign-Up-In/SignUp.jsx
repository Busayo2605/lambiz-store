import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import {
  DarkBtn,
  Input,
  LightBtn,
  SignUpCard,
  SignContainer,
  SubTitleBold,
} from "../../component/style";
import { StoreState } from "../../context/context";

const SignIn = () => {
  const history = useHistory();
  const { setcurrentUser, error, seterror } = StoreState();

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSignup = () => {
    if (password < 6) {
      seterror("PassWord Should be at least 6");
      setTimeout(() => {
        seterror("");
      }, 2000);
    }
    if (password !== confirmPassword) {
      seterror("PassWord does not match");
      setTimeout(() => {
        seterror("");
      }, 2000);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.auth.displayName = Name;
        console.log(user);
        setcurrentUser({
          user,
          displayName: Name,
        });
        history.push("/store");
      })
      .catch((error) => {
        seterror("Failed To Create User");
        setTimeout(() => {
          seterror("");
        }, 2000);
        console.log(error);
      });
  };

  return (
    <Container>
      <SignContainer>
        <SignUpCard>
          {/* <Title>Welcome</Title> */}
          <SubTitleBold>Create New Account.</SubTitleBold>
          {error && <Alert variant="danger">{error}</Alert>}
          <Input
            placeholder="Name"
            required
            type="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="create password"
            required
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <DarkBtn onClick={handleSignup}>Sign Up</DarkBtn>
        </SignUpCard>
        <span style={{ marginBottom: "20px" }}>Already have an account?</span>
        <LightBtn>
          <Link className="create-btn" to="/sign-in">
            Sign-in
          </Link>
        </LightBtn>
      </SignContainer>
    </Container>
  );
};

export default SignIn;
