import * as React from "react";

import { Header } from "../../Components/Header";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";

import TextField from "@mui/material/TextField";
import "@splidejs/splide/dist/css/splide.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import { useTheme } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { useForm, ValidationError } from "@formspree/react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

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

export const InfraPage: React.FC = () => {
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
          backgroundImage: `url(/infra.png)`,
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
          INFRAESTRUTURA
        </Typography>
      </section>
      <section
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5.6rem",
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        {/* <img
          src="/home.png"
          alt="imagem"
          width="50%"
          height="50%"
          loading="lazy"
        /> */}
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFF",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      ></section>
      <section
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5.6rem",
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        {/* <img
          src="/home.png"
          alt="imagem"
          width="50%"
          height="50%"
          loading="lazy"
        /> */}
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFF",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
      ></section>
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
