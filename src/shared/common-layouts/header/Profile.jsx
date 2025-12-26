"use client";

import { ProfileMenus } from "@/shared/constant/constant";
import ThreeDotDropdown from "@/shared/pure-components/three-dot-dropdown/ThreeDotDropdown";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Person2Icon } from "@/assets";

const Profile = ({ dropdown }) => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const router = useRouter();

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleGetQuoteClick = () => {
    router.push('/quick-quote');
  };

  // Static user data - set to null to show Sign In button
  const user = null; // Change this to user object when user is logged in
  /*
  const user = {
    first_name: "John",
    last_name: "Doe",
    name: "Admin",
    email: "john.doe@example.com",
    profile_image: {
      url: "/default-avatar.jpg"
    }
  };
  */

  return (
    <Box sx={{ backgroundColor: "background.body" }}>
      {user ? (
        // Show user profile when logged in
        <>
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            onClick={handleClick2}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Avatar
              alt={user?.name}
              src={user.profile_image?.url}
              sx={{
                width: 35,
                height: 35,
              }}
            />
            <Stack marginLeft={1} textAlign={"left"}>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={"bold"}
                >
                  {user?.first_name} {user?.last_name}
                </Typography>
                <Chip
                  label={user?.name}
                  variant="outlined"
                  size="small"
                  color="primary"
                  sx={{ fontSize: 11, padding: 0 }}
                />
              </Stack>
              <Typography variant="caption" color="text.disabled">
                {user?.email}
              </Typography>
            </Stack>
          </IconButton>
          {dropdown && (
            <ThreeDotDropdown
              setAnchorEl={setAnchorEl2}
              anchorEl={anchorEl2}
              dropdownList={ProfileMenus}
            />
          )}
        </>
      ) : (
        // Show Get Quote button when not logged in
        <Button
          variant="contained"
          size="large"
          onClick={handleGetQuoteClick}
          sx={{
            py: 1,
            px: 2,
            backgroundColor: "background.default",
            borderRadius: 10,
            textTransform: "none",
            color: "text.primary",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "background.paper",
            },
          }}
        >
          Get Quote
        </Button>
      )}
    </Box>
  );
};

export default Profile;