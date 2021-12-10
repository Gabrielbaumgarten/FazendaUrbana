import { Typography, Box } from "@material-ui/core";

const MudaIcon = ({ value }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6406 0.674943C23.8133 0.847626 23.9166 1.07767 23.931 1.32146H23.9311C24.4905 10.8327 21.6228 18.4503 16.2602 21.6983C14.5424 22.7508 12.5659 23.3051 10.5514 23.2994C10.4132 23.2994 10.2749 23.2969 10.1356 23.2919C8.14662 23.2211 6.13889 22.6408 4.15708 21.5688L1.70236 24.0235C1.51535 24.2105 1.2617 24.3156 0.997221 24.3156C0.732742 24.3156 0.479094 24.2105 0.292079 24.0235C0.105064 23.8365 0 23.5828 0 23.3183C0 23.0539 0.105064 22.8002 0.292079 22.6132L2.7468 20.1585C1.67469 18.1767 1.09457 16.169 1.02365 14.1799C0.936607 12.0257 1.49131 9.89408 2.61741 8.05552C5.86528 2.6926 13.4817 -0.17558 22.9941 0.384595C23.2379 0.398947 23.4679 0.50226 23.6406 0.674943ZM5.69568 20.1165C9.05457 21.7378 12.3987 21.7054 15.227 19.9923C19.7839 17.2325 22.2806 10.669 21.9823 2.33311C13.6466 2.0347 7.08335 4.53143 4.32324 9.08874C2.67396 11.8117 2.58258 15.0129 4.02493 18.245C4.1476 19.0923 5.14111 19.832 5.67036 20.117C5.67866 20.117 5.6871 20.1168 5.69568 20.1165Z"
            fill="#23B258"
          />
        </svg>
        <Typography
          sx={{ color: "#23B258", position: "absolute", fontSize: 10 }}
        >
          {value}
        </Typography>
      </Box>
    </>
  );
};

export default MudaIcon;
