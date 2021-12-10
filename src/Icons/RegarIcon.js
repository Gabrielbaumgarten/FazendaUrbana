import { Typography, Box } from "@material-ui/core";

const RegarIcon = ({ value }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <svg
          width="29"
          height="24"
          viewBox="0 0 29 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8612 9.62068C26.4355 9.70864 25.9854 9.67158 25.5646 9.50794L24.8044 9.21231L24.2276 9.78906L18.1147 15.902L17.7486 16.2681V16.7859V22.5882C17.7486 22.6288 17.7331 22.6683 17.7 22.7014C17.6669 22.7345 17.6274 22.75 17.5868 22.75H4.88092C4.84032 22.75 4.80085 22.7345 4.76774 22.7014C4.73463 22.6683 4.71915 22.6288 4.71915 22.5882V13.7506V13.1608L4.26387 12.7857C3.22827 11.9328 2.48149 10.7806 2.12569 9.48701C1.76989 8.19339 1.82243 6.82143 2.27615 5.55881C2.72986 4.29619 3.56258 3.20458 4.66039 2.4333C5.7582 1.66202 7.06749 1.24874 8.40916 1.25H8.41033C12.0117 1.25 14.925 4.1633 14.925 7.76471C14.925 8.01876 14.9221 8.13759 14.9017 8.25336L14.6428 9.72059H16.1327H17.5868C17.6274 9.72059 17.6669 9.73607 17.7 9.76918C17.7331 9.80229 17.7486 9.84176 17.7486 9.88235V12.8047V15.8225L19.8824 13.6886L24.0048 9.56624L24.5816 8.98949L24.2859 8.2293C24.1226 7.80938 24.0879 7.35471 24.1844 6.92095L26.8612 9.62068ZM2.2983 8.61664L2.42818 9.72059H3.53974H13.2809H14.3925L14.5224 8.61664C14.5253 8.5915 14.53 8.55711 14.5358 8.51555C14.5599 8.34027 14.6015 8.03754 14.6015 7.76471C14.6015 4.34965 11.8254 1.57353 8.41033 1.57353C4.99527 1.57353 2.21915 4.34965 2.21915 7.76471C2.21915 8.03755 2.26079 8.34027 2.2849 8.51555C2.29061 8.55711 2.29534 8.59151 2.2983 8.61664Z"
            stroke="#6AB1DD"
            stroke-width="2.5"
          />
        </svg>

        <Typography
          sx={{ color: "#6AB1DD", position: "absolute", fontSize: 10, bottom: 5, left: 5 }}
        >
          {value}x
        </Typography>
      </Box>
    </>
  );
};

export default RegarIcon;