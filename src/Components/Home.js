import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import { Box, Stack, Typography, Card } from "@mui/material";
import { CalendarCheck, MapPin } from "phosphor-react";

import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Stack p={2}>
      <Box
        padding={2}
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
      >
        <Box className="banner">
          <ControlledCarousel />
        </Box>
      </Box>
      <Stack direction={"column"} p={2}>
        <Typography fontSize={"2em"}>Upcoming Events</Typography>
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
          <Card className="upcoming-row">
            <CardActionArea>
              <Stack direction={"column"} spacing={1}>
                <Box p={0.2}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "1.2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                    }}
                  >
                    <Typography variant="body2"> Upcoming </Typography>
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
                <Stack direction={"column"} spacing={3}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard-adkdcm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hackerscape
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="upcoming-row">
            <CardActionArea>
              <Stack direction={"column"} spacing={1}>
                <Box p={0.2}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "1.2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                    }}
                  >
                    <Typography variant="body2"> Upcoming </Typography>
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
                <Stack direction={"column"} spacing={3}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard-adkdcm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hackerscape
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="upcoming-row">
            <CardActionArea>
              <Stack direction={"column"} spacing={1}>
                <Box p={0.2}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "1.2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                    }}
                  >
                    <Typography variant="body2"> Upcoming </Typography>
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
                <Stack direction={"column"} spacing={3}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard-adkdcm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hackerscape
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="upcoming-row">
            <CardActionArea>
              <Stack direction={"column"} spacing={1}>
                <Box p={0.2}>
                  <Card
                    sx={{
                      backgroundColor: "aliceblue",
                      height: "1.2em",
                      width: "6em",
                      justifyContent: "center",
                      alignContent: "center",
                      display: "flex",
                    }}
                  >
                    <Typography variant="body2"> Upcoming </Typography>
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
                <Stack direction={"column"} spacing={3}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard-adkdcm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hackerscape
                  </Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
                      sx={{ justifyContent: "center", alignContent: "center" }}
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
                      <Typography variant="body2"> 100 Attendees </Typography>
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
      <Stack direction={"column"} spacing={2} p={2}>
        <Typography fontSize={"2em"}>Clubs</Typography>
        <Box
          className="club-row"
          paddingBottom={2}
          sx={{
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
      </Stack>
    </Stack>
  );
};

export default Home;
