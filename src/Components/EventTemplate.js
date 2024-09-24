import React from "react";
import ControlledCarouselEvent from "./ControlledCarouselEvent";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, Button, CardActionArea, Divider } from "@mui/material";
import { Box, Stack, Typography, Card } from "@mui/material";
import {
  ArrowBendDoubleUpLeft,
  CalendarCheck,
  DotsThree,
  HeartStraight,
  MapPin,
  PaperPlaneRight,
  ShareNetwork,
  Users,
} from "phosphor-react";
import { Link } from "react-router-dom";
import "./Home.css";
const EventTemplate = () => {
  return (
    <>
      <Box className="event-margin">
        <Box className="content-block">
          <Stack direction={"column"}>
            <Box p={2}>
              <Box className="banner1">
                <ControlledCarouselEvent />
              </Box>
            </Box>
            <Stack spacing={2} className="event-title" paddingLeft={3}>
              <Box
                className="event-title"
                justifyContent={"space-between"}
                alignItems={"center"}
                display={"flex"}
              >
                <Typography fontSize={"2em"} className="event-title">
                  Workshop on No Coding Platform-Framer
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "aliceblue",
                    minHeight: "2em",
                    width: "12em",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={"1em"}> 100 Attendees </Typography>
                </Card>
              </Box>
              <Typography>By Google Developer Student Club</Typography>
              <Box paddingTop={1}>
                <Stack
                  direction={"row"}
                  sx={{ alignItems: "center", display: "flex" }}
                  spacing={2}
                >
                  <CalendarCheck size={18} weight="bold" />
                  <Typography>12 Jan 2024</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ alignItems: "center", display: "flex" }}
                  spacing={2}
                >
                  <MapPin size={18} weight="fill" />
                  <Typography>JC Bose Auditorium 1st Year Building</Typography>
                </Stack>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={1} p={2}>
              <Box paddingTop={2}>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "2em",
                      width: "10em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography fontSize={"20px"}> Register Now</Typography>
                  </Card>
                </Link>
              </Box>
              <Box paddingTop={2}>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      height: "2em",
                      width: "8em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "6px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={1}
                    >
                      <ShareNetwork size={20} weight="fill" />
                      <Typography fontSize={"20px"}>Share</Typography>
                    </Stack>
                  </Card>
                </Link>
              </Box>
            </Stack>
            <Box paddingTop={2} gap={1} p={2} className="nav-btn">
              <Box>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography fontSize={"20px"}> Details</Typography>
                  </Card>
                </Link>
              </Box>
              <Box>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography fontSize={"20px"}>Speakers</Typography>
                  </Card>
                </Link>
              </Box>
              <Box>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography fontSize={"20px"}>Queries</Typography>
                  </Card>
                </Link>
              </Box>
              <Box>
                <Link to={"/event"} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography fontSize={"20px"}>Team</Typography>
                  </Card>
                </Link>
              </Box>
            </Box>
            <Box paddingTop={2}>
              <Divider
                orientation="horizontal"
                style={{ backgroundColor: "black", height: "4px" }}
              />
            </Box>
            <Box className="event-details" paddingTop={4}>
              <Box className="event-details1">
                <Box paddingLeft={"2%"} paddingTop={"1%"}>
                  {" "}
                  <Typography fontSize={30}>Details</Typography>
                </Box>
                <Box paddingTop={1}>
                  <Divider
                    orientation="horizontal"
                    style={{ backgroundColor: "black", height: "2px" }}
                  />
                </Box>
                <Stack direction={"column"} spacing={1} p={2}>
                  <Typography>
                    <b>Event Name:</b> Workshop on No Coding Platform-Framer
                  </Typography>
                  <Typography>
                    <b>Hosted By:</b> Google Developer Student Clubs
                  </Typography>
                  <Typography>
                    <b>POC:</b> +91 1234 5678 910
                  </Typography>
                  <Typography>
                    <b>Description:</b> <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ac auctor augue mauris augue neque. Imperdiet dui
                    accumsan sit amet nulla facilisi morbi tempus iaculis. Metus
                    aliquam eleifend mi in nulla. Semper quis lectus nulla at
                    volutpat diam. Nascetur ridiculus mus mauris vitae ultricies
                    leo integer malesuada. Ornare massa eget egestas purus
                    viverra accumsan. Dui ut ornare lectus sit amet est
                    placerat. Consequat mauris nunc congue nisi vitae{" "}
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box className="event-speaker" paddingTop={4}>
              <Box className="event-speaker1">
                <Box paddingLeft={"2%"} paddingTop={"1%"}>
                  {" "}
                  <Typography fontSize={30}>Speakers</Typography>
                </Box>
                <Box paddingTop={1}>
                  <Divider
                    orientation="horizontal"
                    style={{ backgroundColor: "black", height: "2px" }}
                  />
                </Box>
                <Stack direction={"column"} spacing={1} p={2}>
                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ height: "50px", width: "50px" }} />
                    <Stack direction={"column"}>
                      <Typography>Speaker Name</Typography>
                      <Typography variant="body2">@Speakername</Typography>
                      <Typography variant="body2">Bio</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ height: "50px", width: "50px" }} />
                    <Stack direction={"column"}>
                      <Typography>Speaker Name</Typography>
                      <Typography variant="body2">@Speakername</Typography>
                      <Typography variant="body2">Bio</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box className="event-details" paddingTop={4}>
              <Box className="event-details1">
                <Box paddingLeft={"2%"} paddingTop={"1%"}>
                  {" "}
                  <Typography fontSize={30}>Queries</Typography>
                </Box>
                <Box paddingTop={1}>
                  <Divider
                    orientation="horizontal"
                    style={{ backgroundColor: "black", height: "2px" }}
                  />
                </Box>
                <Stack direction={"column"} spacing={1} p={2} paddingTop={3}>
                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ height: "2em", width: "2em" }} />

                    <Stack direction={"column"}>
                      <Box className="queries-msg-box">
                        <Stack direction={"column"} p={1} spacing={1}>
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignContent={"center"}
                          >
                            <Typography variant="body">@speakername</Typography>
                            <DotsThree size={20} weight="bold" />
                          </Stack>
                          <Typography variant="body2">
                            sdfnsdkejdnwakjk
                          </Typography>
                        </Stack>
                      </Box>
                      <Stack
                        direction={"row"}
                        paddingTop={1}
                        spacing={1}
                        alignItems={"-moz-initial"}
                      >
                        <Box display={"flex"}>
                          <HeartStraight />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                        <Box display={"flex"}>
                          <ArrowBendDoubleUpLeft weight="bold" />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    className="queries-msg-reply"
                  >
                    <Avatar sx={{ height: "2em", width: "2em" }} />

                    <Stack direction={"column"}>
                      <Box className="queries-msg-reply-box">
                        <Stack direction={"column"} p={1} spacing={1}>
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignContent={"center"}
                          >
                            <Typography variant="body">@speakername</Typography>
                            <DotsThree size={20} weight="bold" />
                          </Stack>
                          <Typography variant="body2">
                            sdfnsdkejdnwakjk
                          </Typography>
                        </Stack>
                      </Box>
                      <Stack
                        direction={"row"}
                        paddingTop={1}
                        spacing={1}
                        alignItems={"-moz-initial"}
                      >
                        <Box display={"flex"}>
                          <HeartStraight />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                        <Box display={"flex"}>
                          <ArrowBendDoubleUpLeft weight="bold" />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ height: "2em", width: "2em" }} />

                    <Stack direction={"column"}>
                      <Box className="queries-msg-box">
                        <Stack direction={"column"} p={1} spacing={1}>
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignContent={"center"}
                          >
                            <Typography variant="body">@speakername</Typography>
                            <DotsThree size={20} weight="bold" />
                          </Stack>
                          <Typography variant="body2">
                            sdfnsdkejdnwakjk
                          </Typography>
                        </Stack>
                      </Box>
                      <Stack
                        direction={"row"}
                        paddingTop={1}
                        spacing={1}
                        alignItems={"-moz-initial"}
                      >
                        <Box display={"flex"}>
                          <HeartStraight />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                        <Box display={"flex"}>
                          <ArrowBendDoubleUpLeft weight="bold" />
                          <Typography variant="body2">1.12k</Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ height: "2em", width: "2em" }} />

                    <Stack direction={"column"}>
                      <Box className="queries-msg-input">
                        <form>
                          <Stack
                            direction={"row"}
                            p={1}
                            spacing={1}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                          >
                            <input
                              type="textarea"
                              name="name"
                              className="queries-msg-input-text"
                              placeholder="Add comment..."
                              style={{ minWidth: "7em" }}
                            />

                            <PaperPlaneRight size={20} weight="fill" />
                          </Stack>
                        </form>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box className="event-team" paddingTop={4}>
              <Box className="event-team1">
                <Box paddingLeft={"2%"} paddingTop={"2%"}>
                  {" "}
                  <Typography fontSize={30}>Team</Typography>
                </Box>
                <Divider
                  orientation="horizontal"
                  style={{ backgroundColor: "black", height: "2px" }}
                />
                <Box className="event-team-row" paddingBottom={2}>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                </Box>
                <Box className="event-team-row" paddingBottom={2}>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                </Box>
                <Box className="event-team-row" paddingBottom={2}>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
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
                    <Typography>Name</Typography>
                    <Typography variant="body2">Name</Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default EventTemplate;
