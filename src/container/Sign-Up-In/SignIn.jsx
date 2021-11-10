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
import { useForm } from "react-hook-form";
import Loading from "../../component/loading";

const SignIn = () => {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { setcurrentUser, seterror, error, setLoading,loading } = StoreState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setcurrentUser(user);
        setLoading(true)
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
      {loading && <Loading />}
      <SignContainer>
        <SignCard>
          <Title>Sign-In</Title>
          {error && <Alert variant="danger">Failed To Sign-In</Alert>}
          <Input
            type="email"
            placeholder="Enter Email"
            {
              ...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })
            
          }
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <small className="text-danger">
            {errors.email && errors.email.message}
          </small>
          <Input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true, minLength: 6 })}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          
          />
          {errors.password && (
            <small className="text-danger">Invalid Password</small>
          )}
          <DarkBtn onClick={handleSubmit(handleSignin)}>Login</DarkBtn>
        </SignCard>
        <span style={{ marginBottom: "15px" }}>New to Store?</span>
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
