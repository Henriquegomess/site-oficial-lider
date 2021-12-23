import { useForm, ValidationError } from "@formspree/react";
import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "@splidejs/splide/dist/css/splide.min.css";
import * as React from "react";
import { Header } from "../../Components/Header";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

const images = [
  {
    url: "/home.png",
    title: "Nossa frota",
    width: "40%",
  },
  {
    url: "/slide2.png",
    title: "Nossa frota",
    width: "30%",
  },
  {
    url: "/slide3.png",
    title: "Nossa frota",
    width: "30%",
  },
  {
    url: "/imagem3.png",
    title: "Nossa frota",
    width: "40%",
  },
  {
    url: "/imagem4.png",
    title: "Nossa frota",
    width: "30%",
  },
  {
    url: "/imagem5.png",
    title: "Nossa frota",
    width: "30%",
  },
 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function ContactForm() {
  const [state, handleSubmit] = useForm("xvodyjob");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      action="https://formspree.io/f/xvodyjob"
      encType="multipart/form-data"
      method="POST"
    >
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />{" "}
      <label>
        Your file:
        <input type="file" name="upload" />
      </label>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export const FrotaPage: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={{ height: "100vh" }}>
      <a
        href="https://api.whatsapp.com/send?phone=5519999999999&text=Texto%20aqui"
        target="_blank"
        style={{ position: "fixed", bottom: "20px", right: "30px" }}
      >
        <svg
          enable-background="new 0 0 512 512"
          width="50"
          height="50"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z"
            fill="#4CAF50"
          />
          <path
            d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
            fill="#FAFAFA"
          />
        </svg>
      </a>
      <Header />
      <section
        style={{
          backgroundImage: `url(/frota.png)`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      ></section>
      <section
        style={{
          height: "15%",
          backgroundImage: "linear-gradient(to right, #095134, #168D63)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "white", fontSize: "4rem" }}>
          NOSSA FROTA
        </Typography>
      </section>
      {/* <section
        style={{
          height: "100%",
          display: "flex",

          paddingLeft: "5.6rem",
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            src="/home.png"
            alt="imagem"
            width="50%"
            height="50%"
            loading="lazy"
          />
          <Box
            style={{
              paddingRight: "2.4rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                color: "#40AC49",
                fontWeight: "lighter",
                fontSize: "3.6rem",
              }}
            >
              AMAZON LIDER
            </Typography>
            <Typography>
              {" "}
              Morbi tempus felis turpis odio. Purus cras adipiscing eu ultrices
              lobortis. Proin consectetur risus fermentum facilisis nisl. Amet
              diam sed rhoncus ultricies. Elit eleifend at adipiscing donec.
              Faucibus arcu purus nascetur mauris cursus enim sagittis. In ante
              risus, sed in accumsan. Suspendisse et magna arcu, tortor, a. Quis
              enim pellentesque consequat egestas commodo egestas elementum.
              Turpis quis diam sit sed nunc, viverra. Proin quam a semper lacus
              cras. Auctor pellentesque curabitur faucibus.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          container
          xs={12}
          justifyContent="space-between"
          flexDirection="row"
        >
          <img
            src="/icon1.png"
            alt="imagem"
            width="120px"
            height="120px"
            loading="lazy"
          />
          <img
            src="/icon2.png"
            alt="imagem"
            width="120px"
            height="120px"
            loading="lazy"
          />
          <img
            src="/icon3.png"
            alt="imagem"
            width="120px"
            height="120px"
            loading="lazy"
          />
        </Grid>
      </section> */}
      <section
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(/bg_escuro.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Typography
          style={{
            fontSize: "2.4rem",
            color: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Frota terceirizada é mais economia e eficiência para sua empresa
        </Typography>
      </section>
      <section
        style={{
          backgroundColor: "#FFF",
          flexDirection: "column",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          paddingTop: "4rem",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </section>
      <section
        style={{
          height: "40%",
          backgroundImage: "linear-gradient(to right, #095134, #168D63)",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography> </Typography>
          <Box
            style={{
              flexDirection: "column",
              textAlign: "right",
              paddingRight: "4rem",
            }}
          >
            <Typography style={{ fontSize: "3.2rem", color: "#FFF" }}>
              Matriz
            </Typography>
            <Divider
              style={{
                width: "100%",
                maxWidth: 560,
                backgroundColor: "#FFF",
              }}
            />
            <Typography
              style={{
                fontSize: "1.6rem",
                color: "#FFF",
                fontWeight: "lighter",
              }}
            >
              Ruas Caraubas 16, Manaus - AM, 69098-060
            </Typography>
            <Typography
              style={{ fontSize: "1.6rem", color: "#FFF", fontWeight: 200 }}
            >
              (92) 33047736
            </Typography>
            <Typography
              style={{ fontSize: "1.6rem", color: "#FFF", fontWeight: 200 }}
            >
              contato@liderransportes.com.br
            </Typography>
          </Box>
        </Grid>
      </section>
    </div>
  );
};
