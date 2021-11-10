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
import { useForm } from "react-hook-form";

const SignIn = () => {
  const history = useHistory();
  const { setcurrentUser, error, seterror,setLoading } = StoreState();

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignup = () => {
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

        console.log(user);
        setcurrentUser({
          user,
          // displayName: Name,
        });
        setLoading(true)
        history.push("/store");
      })
      .catch((error) => {
        seterror("Failed To Create User");
        setTimeout(() => {
          seterror("");
        }, 2000);
        console.log(error);
      });

    reset();
  };

  return (
    <Container>
      <SignContainer>
        <SignUpCard>
          <SubTitleBold>Create New Account.</SubTitleBold>
          {error && <Alert variant="danger">{error}</Alert>}
          <Input
            placeholder="Name"
            required
            type="name"
            {...register("name", { required: "Name is Required" })}
            
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}

          <Input
            placeholder="Enter Email"
            required
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />
          <small className="text-danger">
            {errors.email && errors.email.message}
          </small>
          <Input
            placeholder="create password"
            required
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            
          />
          {errors.password && (
            <small className="text-danger">Invalid Password</small>
          )}
          <Input
            placeholder="confirm password"
            required
            type="password"
            {...register("confirm-password", { required: true, minLength: 6 })}
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
           
          />
          {errors.password && (
            <small className="text-danger">Invalid Password</small>
          )}
          <DarkBtn onClick={handleSubmit(handleSignup)}>Sign Up</DarkBtn>
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
