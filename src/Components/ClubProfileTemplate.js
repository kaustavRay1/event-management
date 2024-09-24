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
const ClubProfileTemplate = () => {
  return (
    <>
      <Box className="event-margin">
        <Box className="content-block" paddingTop={4}>
          <Box width={"100%"}>
            <Stack width={"100%"} justifyContent={"center"} spacing={"-3em"}>
              <Box className="club-profile-banner"></Box>
              <Box
                className="club-profile-title-row"
                width={"100%"}
                paddingLeft={"2%"}
                display={"flex"}
                gap={"1em"}
              >
                <Box className="club-profile-img"></Box>
                <Stack>
                  <Typography variant="h4">
                    Google Developer Student Club-MSIT
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Box
              paddingTop={3}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                auctor augue mauris augue neque. Imperdiet dui accumsan sit amet
                nulla facilisi morbi tempus iaculis. Metus aliquam eleifend mi
                in nulla. Semper quis lectus nulla at volutpat diam.{" "}
              </Typography>
            </Box>
            <Box paddingTop={5}>
              <Divider
                orientation="horizontal"
                style={{ height: "2px", backgroundColor: "black" }}
              />
            </Box>
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
            </Box>
            <Stack direction={"column"} p={2}>
              <Typography fontSize={"2em"}>New Events</Typography>
              <Stack
                direction={"row"}
                spacing={3}
                sx={{
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": { width: 4, height: 6 },
                  "&::-webkit-scrollbar-thumb": {
                    background: "white",
                    borderRadius: 4,
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "black",
                    borderRadius: 4,
                  },
                  paddingBottom: 1,
                }}
              >
                <Card className="new-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            12 Jan 2024
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            JC Bose Auditorium 1st Year Building
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Link to={"/event"} style={{ textDecoration: "none" }}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "2em",
                            width: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography fontSize={"20px"}> Register</Typography>
                        </Card>
                      </Link>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="new-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            JC Bose Auditorium 1st Year Building
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="new-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            JC Bose Auditorium 1st Year Building
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="new-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            JC Bose Auditorium 1st Year Building
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
              </Stack>
            </Stack>
            <Stack direction={"column"} p={2}>
              <Typography fontSize={"2em"}>Ongoing Events</Typography>
              <Stack
                direction={"row"}
                spacing={3}
                sx={{
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": { width: 4, height: 6 },
                  "&::-webkit-scrollbar-thumb": {
                    background: "white",
                    borderRadius: 4,
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "black",
                    borderRadius: 4,
                  },
                  paddingBottom: 1,
                }}
              >
                <Card className="ongoing-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            Dates
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="ongoing-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            Dates
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="ongoing-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            Dates
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card className="ongoing-row">
                  <CardActionArea>
                    <Stack direction={"column"} spacing={1}>
                      <Box p={0.2}>
                        <Card
                          sx={{
                            backgroundColor: "aliceblue",
                            height: "1.2em",
                            width: "4em",
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Typography variant="body2"> New </Typography>
                        </Card>
                      </Box>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                      />
                    </Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard-adkdcm
                        </Typography>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignContent={"center"}
                          display={"flex"}
                        >
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            Hackerscape
                          </Typography>
                          <Card
                            sx={{
                              backgroundColor: "aliceblue",
                              height: "1.1em",
                              width: "7em",
                              justifyContent: "center",
                              alignContent: "center",
                              display: "flex",
                            }}
                          >
                            <Typography variant="body2">
                              {" "}
                              100 Attendees{" "}
                            </Typography>
                          </Card>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <CalendarCheck size={18} weight="bold" />
                          <Typography variant="body2" color="text.secondary">
                            Dates
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          sx={{ alignContent: "center", display: "flex" }}
                          spacing={2}
                        >
                          <MapPin size={18} weight="fill" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            maxWidth={"10em"}
                          >
                            Dates
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                    <Box>
                      <Card
                        sx={{
                          backgroundColor: "aliceblue",
                          height: "2em",
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          display: "flex",
                        }}
                      >
                        <Typography fontSize={"20px"}> Register</Typography>
                      </Card>
                    </Box>
                  </CardActionArea>
                </Card>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClubProfileTemplate;
