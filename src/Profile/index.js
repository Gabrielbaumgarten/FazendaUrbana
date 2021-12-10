import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useEffect, useState } from "react";
import { getProfile } from "../services";
import useStyles from "./styles";

const Profile = () => {
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const classes = useStyles()

  useEffect(() => {
    const getUserFunction = async () => {
      try {
        const data = await getProfile();
        setName(data.Name);
        setPhoto(data.Photo);
      } catch (error) {
        alert(error);
      }
    };

    getUserFunction();
  }, []);

  return (
    <Box display='flex' alignItems='center' mr={5}>
      <Typography variant="body1" className={classes.name}>{name}</Typography>
      <Box className={classes.profilePhoto} ml={2}>
        <img src={photo} alt="ProfilePhoto"  className={classes.photo}/>
      </Box>
    </Box>
  );
};

export default Profile;
