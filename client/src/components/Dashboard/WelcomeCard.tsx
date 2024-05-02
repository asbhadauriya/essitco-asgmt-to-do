"use client";
import { useTheme } from "@emotion/react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
let fName: string | undefined = "";
function WelcomeCard(props: any) {
  const { title, sx } = props;
  const theme: any = useTheme();
  useEffect(() => {
    fName = localStorage.getItem("name")?.toUpperCase();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Card sx={{ ...sx, backgroundColor: theme?.palette.primary.dark }}>
        <CardContent>
          <Stack
            alignItems="flex-start" // Align items to the start (left)
            direction="row" // Display items horizontally
            justifyContent="space-between" // Distribute space evenly between items
            spacing={3}
          >
            <Stack spacing={1} flexGrow={1}>
              <Typography color="white" variant="h4">
                Welcome {fName}!
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default WelcomeCard;
