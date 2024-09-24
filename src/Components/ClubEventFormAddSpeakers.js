import React from "react";
import "./Home.css";
import {
  Box,
  Input,
  NativeSelect,
  Select,
  Stack,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
const ClubEventFormAddSpeakers = () => {
  return (
    <Box className="event-margin">
      <Box className="content-block">
        <Box paddingTop={5}>
          <Box
            paddingTop={2}
            paddingBottom={2}
            display={"flex"}
            gap={2}
            width={"100%"}
            overflow={"hidden"}
          >
            <Stack width={"33%"}>
              <Divider
                orientation="horizontal"
                style={{
                  backgroundColor: "#D9D9D9",
                  height: "3px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
              <Typography sx={{ color: "#D9D9D9" }}>Details</Typography>
            </Stack>
            <Stack width={"33%"}>
              <Divider
                orientation="horizontal"
                style={{
                  backgroundColor: "#1C1B1F",
                  height: "3px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
              <Typography sx={{ color: "#1C1B1F" }}>Add Speaker</Typography>
            </Stack>
            <Stack width={"33%"}>
              <Divider
                orientation="horizontal"
                style={{
                  backgroundColor: "#D9D9D9",
                  height: "3px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
              <Typography sx={{ color: "#D9D9D9" }}>Additional Form</Typography>
            </Stack>
          </Box>
          <form className="event-form-block">
            <Box p={2} paddingTop={2}>
              <Box
                gap={4}
                width={"100%"}
                display={"flex"}
                className="form-flex-dir"
                alignItems={"center"}
              >
                <Box>
                  <Card
                    sx={{
                      height: "7.5em",
                      width: "7.5em",
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <img src="" alt="" class="circle-cards" />
                  </Card>
                </Box>
                <Box>
                  <input
                    type="button"
                    value={"Add Profile"}
                    style={{
                      backgroundColor: "#1C1B1F",
                      height: "2em",
                      width: "6em",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      borderRadius: "10px",
                      color: "#ffff",
                    }}
                  />
                </Box>
              </Box>
              <Box paddingTop={5}>
                <Typography>Speaker Name</Typography>
                <input
                  type="text"
                  required
                  style={{
                    minWidth: "20vw",
                    borderRadius: "6px",
                    height: "2em",
                  }}
                />
              </Box>
              <Box
                gap={4}
                width={"100%"}
                display={"flex"}
                className="form-flex-dir"
                paddingTop={2}
              >
                <Box>
                  <Typography>Company Name</Typography>
                  <input
                    type="text"
                    required
                    style={{
                      minWidth: "20vw",
                      borderRadius: "6px",
                      height: "2em",
                    }}
                  />
                </Box>
                <Box>
                  <Typography>Designation</Typography>
                  <input
                    type="text"
                    required
                    style={{
                      minWidth: "20vw",
                      borderRadius: "6px",
                      height: "2em",
                    }}
                  />
                </Box>
              </Box>
              <Box paddingTop={2}>
                <Typography>Email Address</Typography>
                <input
                  type="email"
                  required
                  style={{
                    minWidth: "20vw",
                    borderRadius: "6px",
                    height: "2em",
                  }}
                />
              </Box>
              <Box
                paddingTop={4}
                width={"100%"}
                display={"flex"}
                className="form-flex-dir"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <input
                  type="button"
                  value={"Add Speaker"}
                  style={{
                    backgroundColor: "#1C1B1F",
                    height: "2em",
                    width: "8em",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "10px",
                    color: "#ffff",
                  }}
                />
                <Input type="reset" value=" Clear " />
              </Box>
              <Box paddingTop={2}>
                {" "}
                <Divider
                  orientation="horizontal"
                  style={{ backgroundColor: "black", height: "2px" }}
                />
              </Box>
              <Box display={"flex"} paddingTop={2}>
                <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                  <Card
                    sx={{
                      height: "6.37em",
                      width: "6.37em",
                      borderRadius: "100%",
                    }}
                  >
                    <img src="" alt="" class="circle-cards" />
                  </Card>
                  <Typography variant="body">@username</Typography>
                  <Typography variant="body2">Speaker</Typography>
                  <Typography variant="body2">Bio</Typography>
                </Stack>
              </Box>
              <Box
                paddingTop={2}
                gap={2}
                p={2}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box>
                  <Link to={""} style={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        backgroundColor: "#1C1B1F",
                        height: "2em",
                        width: "10em",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        borderRadius: "10px",
                        color: "#ffff",
                      }}
                    >
                      <Typography fontSize={"1em"}>Save as draft</Typography>
                    </Card>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to={"/clubeventformadditionaldetails"}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "#1C1B1F",
                        height: "2em",
                        width: "6em",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        borderRadius: "10px",
                        color: "#ffff",
                      }}
                    >
                      <Typography fontSize={"1em"}>Continue</Typography>
                    </Card>
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ClubEventFormAddSpeakers;
