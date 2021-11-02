import * as React from "react";

import { Header } from "../../Components/Header";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import TextField from "@mui/material/TextField";

import { useTheme } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export const HomePage: React.FC = () => {
  const theme = useTheme();
  return (
    <div style={{ height: "100vh" }}>
      {/* <a
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
      </a> */}
      <Header />
      <section
        style={{
          height: "100%",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#FFFFFF" }}>Home</Typography>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#ECF0F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 340,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              egestas viverra condimentum sed. Etiam integer bibendum vitae
              proin ullamcorper. Cursus amet auctor cursus vel, sagittis
              imperdiet pulvinar turpis nunc. Purus mauris vitae vulputate quis
              tempus, vitae enim. Eget condimentum penatibus nisi eget habitant
              vestib.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                width: "100%",
                backgroundColor: "#40AC49",
                color: "#FFFFFF",
              }}
            >
              Conheça mais
            </Button>
          </CardActions>
        </Card>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Imagem do onibus</Typography>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Serviços</Typography>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#ECF0F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 400, paddingRight: "1.2rem" }}
            image="/onibus.png"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column",  maxWidth: 540 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography sx={{color: "#40AC49", fontSize: "3.2rem", paddingBottom: "2.4rem"}}>
                Nossa História
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                feugiat orci, suscipit tellus felis odio tellus tortor, id. Quis
                sit arcu sagittis, nisl lacus. Odio quam facilisis viverra
                aliquam magna integer tellus id in. Lectus morbi erat amet urna
                volutpat. Non habitant faucibus pellentesque aliquet. Venenatis
                vestibulum vel accumsan blandit enim enim vel eget pulvinar.
                Nulla vestibulum senectus nullam feugiat neque placerat et.
                Hendrerit commodo ac volutpat dolor turpis at odio. Leo ante
                velit massa massa. In odio id ultrices donec mi sollicitudin.
                Ipsum, ac nisl vulputate dictum. Morbi velit sit nunc, in libero
                rhoncus vitae nulla aliquet. Id enim lectus odio elementum.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.683776188906!2d-59.9756854!3d-3.0488473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52bd9f5757460b76!2sAmazon%20L%C3%ADder%20Transporte%20e%20Turismo%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1635830272925!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
      <section
        style={{
          height: "70%",
          backgroundColor: "#ECF0F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={6} sx={{ paddingLeft: "8rem" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "3.2rem",
                color: "#40AC49",
              }}
            >
              Trabalhe conosco
            </Typography>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: "lighter" }}>
              Envie seu curriculum para nosso setor de RH para analise.
              <br />
              Assim que tivermos vaga disponível entraremos em contato.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80%" },
                display: "flex",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Fale um pouco sobre você"
                multiline
                rows={4}
              />
              <input type="file"></input>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#40AC49",
                  color: "#FFFFFF",
                }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section
        style={{
          height: "40%",
          backgroundColor: "#40AC49",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Footer</Typography>
      </section>
    </div>
  );
};
