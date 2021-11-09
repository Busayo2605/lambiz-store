import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {
  DarkBtn,
  Input,
  LightBtn,
  SignCard,
  SignContainer,
  Title,
} from "../../component/style";
import { StoreState } from "../../context/context";

const SignIn = () => {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { setcurrentUser, seterror, error } = StoreState();

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setcurrentUser(user);
        history.push("/store");
      })
      .catch((error) => {
        seterror("Failed To Sign-In");
        setTimeout(() => {
          seterror("");
        }, 2000);
      });
  };

  return (
    <Container>
      <SignContainer>
        <SignCard>
          <Title>Sign-In</Title>
          {error && <Alert variant="danger">Failed To Sign-In</Alert>}
          <Input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter Email"
          />
          <Input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
          <DarkBtn onClick={handleSignin}>Login</DarkBtn>
        </SignCard>
        <span style={{marginBottom:'15px'}}>New to Store?</span>
        <LightBtn>
          <Link className="create-btn" to="/sign-up">
            Create Your New Account
          </Link>
        </LightBtn>
      </SignContainer>
    </Container>
  );
};

export default SignIn;
