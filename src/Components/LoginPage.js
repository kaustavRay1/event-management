import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import { PaperPlaneRight } from "phosphor-react";
const LoginPage = () => {
  return (
    <>
      <Stack
        direction={"row"}
        p={2}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Box className="login-img-box">
          <Box className="login-img">
            <img src="group 186.svg" height={"100%"} width={"100%"} />
          </Box>
        </Box>
        <Box className="login-box">
          <Box paddingTop={4} paddingLeft={3}>
            <h2>Login</h2>
          </Box>
          <Box className="login-form">
            <Stack direction={"column"} justifyContent={"center"}>
              <form>
                <Stack direction={"column"}>
                  <Box
                    className=""
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    paddingTop={5}
                  >
                    <form>
                      <Typography paddingBottom={1}>Email</Typography>
                      <input
                        type="email"
                        name="name"
                        className="login-input-box"
                        placeholder="info@example.com"
                      />
                      <Typography paddingBottom={1} paddingTop={0.5}>
                        Password
                      </Typography>
                      <input
                        type="password"
                        name="name"
                        className="login-input-box"
                        placeholder="Password"
                      />
                      <Typography paddingLeft={"50%"} paddingTop={0.5}>
                        Forgot password?
                      </Typography>
                      <Box paddingTop={2}>
                        <input
                          type="submit"
                          value={"Login"}
                          className="login-btn"
                        />
                      </Box>
                      <Typography
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        paddingTop={0.5}
                        variant="body2"
                      >
                        Don’t have an account? Signup now
                      </Typography>
                    </form>
                  </Box>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default LoginPage;
