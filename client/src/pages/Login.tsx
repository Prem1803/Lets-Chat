import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { Typography } from '@mui/material'
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import AuthBox from '../components/AuthBox'
import {validateLoginForm} from "../utils/validators"
import {loginUser} from "../actions/authActions";
import { useAppSelector } from '../store';


const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
});

const Label = styled("p")({
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "sans-serif",
    letterSpacing:"0.1rem"
});

const Input = styled("input")({
    flexGrow: 1,
    height: "40px",
    border: "1px solid #3b7584",
    borderRadius: "5px",
    color: "#043745",
    background: "#a5c4cc",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
    outline: "none",
    letterSpacing:"0.05rem"
});


const RedirectText = styled("span")({
    color: "#fdff00",
    fontWeight: 500,
    fontSize: "16px",
    cursor: "pointer",
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch ();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [isFormValid, setIsFormValid] = useState(false); 

    const {error, errorMessage, userDetails} = useAppSelector(state => state.auth) 


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        dispatch<any>(loginUser(credentials))
    }


    useEffect(() => {
        setIsFormValid(validateLoginForm(credentials))
    }, [credentials])


    useEffect(() => {
        
        if ("token" in userDetails) {
            navigate("/dashboard")
        }

    }, [userDetails, navigate])

  return (
      <AuthBox>
          <Typography variant="h5" sx={{ color: "white" ,textAlign:"center"}}>
              Welcome Back!
          </Typography>
          <Typography sx={{ color: "white",textAlign:"center" }}>
              Happy to see you again!
          </Typography>

          <Wrapper>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" name='email' value={credentials.email} onChange={handleChange}/>
          </Wrapper>

          <Wrapper>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter password" name="password" value={credentials.password} onChange={handleChange}/>
          </Wrapper>

          <Tooltip  title={isFormValid ? "Proceed to Login" : "Enter correct email address and password should be greater than six characters"}>
              <div>
                  <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        letterSpacing:"0.1rem",
                          bgcolor: "#5865F2",
                          width: "100%",
                          height: "40px",
                          margin: "20px 0px",
                      }}
                      disabled={!isFormValid}
                      onClick={handleLogin}
                  >
                      Login In
                  </Button>
              </div>
          </Tooltip>

          <Typography sx={{ color: "white" }} variant="subtitle2">
              {`Don't have an account? `}
              <RedirectText onClick={() => navigate("/register")}>Register here</RedirectText>
          </Typography>

      </AuthBox>
  );
}

export default Login