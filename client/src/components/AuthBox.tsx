import { FunctionComponent,ReactNode } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
});
interface BaseLayoutProps {
    children?: ReactNode;
  }
const AuthBox: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return (
        <BoxWrapper>
            <Box
                sx={{
                    maxWidth: 700,
                    width: "85%",
                    bgcolor: "#3b7584",
                    borderRadius: "7px",
                    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "25px",
                }}
            >
                {children}
            </Box>
        </BoxWrapper>
    );
};

export default AuthBox;
