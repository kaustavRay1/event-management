import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
const MyTickets = () => {
    return (
        <>
            <Box className="clubs-margin">
                <Box className="tickets-box">
                    <Stack direction={"column"} spacing={3} paddingTop={3}>
                        <Typography variant="h4">My Tickets</Typography>
                        <Box className="clubs-card-row" display={"flex"} gap={2}>
                            <Box className="tickets-block">
                                <Box className="tickets-row" display={"flex"} p={4} gap={1}>
                                    <Card
                                        sx={{
                                            height: "8.375em",
                                            width: "10.375em",
                                            borderRadius: "100%",
                                        }}
                                    ></Card>
                                    <Stack>
                                        <Typography variant="h4">
                                            Google Developer Student Club-MSIT
                                        </Typography>
                                        <Typography variant="body">Tech Club</Typography>
                                        <Typography variant="body">
                                            Perform activity around
                                        </Typography>
                                    </Stack>
                                    <Card sx={{ height: "8.375em", width: "10.375em" }}></Card>
                                </Box>
                            </Box>
                            <Box className="tickets-block">
                                <Box className="tickets-row" display={"flex"} p={4} gap={1}>
                                    <Card
                                        sx={{
                                            height: "8.375em",
                                            width: "10.375em",
                                            borderRadius: "100%",
                                        }}
                                    ></Card>
                                    <Stack>
                                        <Typography variant="h4">
                                            Google Developer Student Club-MSIT
                                        </Typography>
                                        <Typography variant="body">Tech Club</Typography>
                                        <Typography variant="body">
                                            Perform activity around
                                        </Typography>
                                    </Stack>
                                    <Card sx={{ height: "8.375em", width: "10.375em" }}></Card>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="clubs-card-row" display={"flex"} gap={2}>
                            <Box className="tickets-block">
                                <Box className="tickets-row" display={"flex"} p={4} gap={1}>
                                    <Card
                                        sx={{
                                            height: "8.375em",
                                            width: "10.375em",
                                            borderRadius: "100%",
                                        }}
                                    ></Card>
                                    <Stack>
                                        <Typography variant="h4">
                                            Google Developer Student Club-MSIT
                                        </Typography>
                                        <Typography variant="body">Tech Club</Typography>
                                        <Typography variant="body">
                                            Perform activity around
                                        </Typography>
                                    </Stack>
                                    <Card sx={{ height: "8.375em", width: "10.375em" }}></Card>
                                </Box>
                            </Box>
                            <Box className="tickets-block">
                                <Box className="tickets-row" display={"flex"} p={4} gap={1}>
                                    <Card
                                        sx={{
                                            height: "10.375em",
                                            width: "10.375em",
                                            borderRadius: "100%",
                                        }}
                                    ></Card>
                                    <Stack>
                                        <Typography variant="h4">
                                            Google Developer Student Club-MSIT
                                        </Typography>
                                        <Typography variant="body">Tech Club</Typography>
                                        <Typography variant="body">
                                            Perform activity around
                                        </Typography>
                                    </Stack>
                                    <Card sx={{ height: "8.375em", width: "10.375em" }}></Card>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                            }}
                            paddingBottom={3}
                            paddingTop={2}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#D9D9D9",
                                    minHeight: "2em",
                                    width: "8em",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography fontSize={"1em"}>Load More</Typography>
                            </Card>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default MyTickets;
