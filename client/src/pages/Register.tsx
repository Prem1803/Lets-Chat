import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import AuthBox from "../components/AuthBox";
import { validateRegisterForm } from "../utils/validators";
import { useAppSelector } from "../store";
import { registerUser } from "../actions/authActions";

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

const Register = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        username: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const { error, errorMessage, userDetails } = useAppSelector(
        (state) => state.auth
    );

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = () => {
        dispatch<any>(registerUser(credentials));
    };

    useEffect(() => {
        setIsFormValid(validateRegisterForm(credentials));
    }, [credentials]);


    useEffect(() => {
        if ("token" in userDetails) {
            navigate("/dashboard");
        }
    }, [userDetails, navigate]);

    return (
        <AuthBox>
            <Typography variant="h5" sx={{ color: "white" ,textAlign:"center" }}>
                Welcome!
            </Typography>
            <Typography sx={{ color: "white",textAlign:"center" }}>
                Create an account to get started.
            </Typography>

            <Wrapper>
                <Label>Username</Label>
                <Input
                    type="email"
                    placeholder="Enter your username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
            </Wrapper>

            <Wrapper>
                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
            </Wrapper>

            <Wrapper>
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
            </Wrapper>

            <Tooltip
                title={
                    isFormValid
                        ? "Proceed to Register"
                        : "Enter correct email address. Password should be greater than six characters and username should be between 3 and 12 characters!"
                }
            >
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
                        onClick={handleRegister}
                    >
                        Sign Up
                    </Button>
                </div>
            </Tooltip>

            <Typography sx={{ color: "white" }} variant="subtitle2">
                {`Already have an account? `}
                <RedirectText onClick={() => navigate("/login")}>
                    Log In
                </RedirectText>
            </Typography>
        </AuthBox>
    );
};

export default Register;
