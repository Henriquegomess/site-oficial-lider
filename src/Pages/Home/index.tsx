/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
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

import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Config/routes";

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

export const HomePage: React.FC = () => {
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
          // backgroundImage: `url(/home.png)`,
          // backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          // backgroundSize: "cover",
        }}
      >
        <Splide
          options={{
            rewind: true,
            width: "100%",
            height: "100vh",
            gap: "1rem",
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img src="home.png" alt="Image 1" width="100%" height="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="slide2.png" alt="Image 2" width="100%" height="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="slide3.png" alt="Image 1" width="100%" height="100%" />
          </SplideSlide>
        </Splide>
      </section>
      <section
        style={{
          height: "8%",
          backgroundImage: "linear-gradient(to right, #095134, #168D63)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: "white" }}>
          Temos prote????es COVID-19 em nosso escrit??rio, que incluem o uso de
          m??scaras e verifica????es de temperatura.
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
        <Box style={{ paddingRight: "2.4rem" }}>
          <Typography
            style={{
              color: "#168D63",
              fontWeight: "lighter",
              fontSize: "3.6rem",
              textAlign: "right",
            }}
          >
            AMAZON LIDER
          </Typography>
          <Typography style={{ color: "#747678", textAlign: "right" }}>
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

        <img
          src="/home.png"
          alt="imagem"
          width="70%"
          height="70%"
          loading="lazy"
        />

        <Typography
          style={{
            paddingRight: "5.6rem",
            paddingLeft: "12rem",
            transform: `rotate(-90deg)`,
          }}
        >
          QUEM SOMOS
        </Typography>
      </section>
      <section
        style={{
          height: "15%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            color: "#168D63",
            fontSize: "2rem",
            fontWeight: 200,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Trabalhando com o compromisso de atender e satisfazer cliente com o
          que h?? de melhor e mais inovador no mercado
        </Typography>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#ECF0F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "2rem",
          }}
        >
          <img
            src="/1.png"
            alt="imagem"
            width="100%"
            loading="lazy"
            style={{ paddingBottom: "2rem" }}
          />
          <img
            src="/2.png"
            alt="imagem"
            width="420px"
            height="100%"
            loading="lazy"
            style={{ paddingBottom: "2rem" }}
          />
          <img src="/3.png" alt="imagem" width="100%" loading="lazy" />
        </Box>
        <Box>
          <Typography
            style={{ color: "#168D63", fontSize: "2.4rem", fontWeight: "bold" }}
          >
            Experi??ncia incr??vel
          </Typography>
          <Typography style={{ paddingBottom: "1.6rem", color: "#747678" }}>
            E inesquec??vel
          </Typography>
          <Card
            sx={{
              maxWidth: 340,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada egestas viverra condimentum sed. Etiam integer
                bibendum vitae proin ullamcorper. Cursus amet auctor cursus vel,
                sagittis imperdiet pulvinar turpis nunc. Purus mauris vitae
                vulputate quis tempus, vitae enim. Eget condimentum penatibus
                nisi eget habitant vestib.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#168D63",
                  color: "#FFFFFF",
                }}
                component={Link}
                to={ROUTES.FROTA}
              >
                Conhe??a mais
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2rem",
          }}
        >
          <img
            src="/4.png"
            alt="imagem"
            width="420px"
            loading="lazy"
            style={{ paddingBottom: "2rem" }}
          />
          <img
            src="/5.png"
            alt="imagem"
            width="100%"
            loading="lazy"
            style={{ paddingBottom: "2rem" }}
          />
          <img src="/6.png" alt="imagem" width="100%" />
        </Box>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "12rem",
          paddingLeft: "12rem",
          flexDirection: "column",
          backgroundImage: `url(/bg_branco.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          container
          xs={12}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              City Tours e Viagens
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Excurs??es Regionais
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Eventos Corporativos
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Feiras, Congressos e Eventos
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Loca????o de ??nibus executivo
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Receptivo em geral
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Transporte de funcion??rios
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Traslados para aeroportos
            </Typography>
            <Typography style={{ fontSize: "1.8rem", color: "#747678" }}>
              Traslados para Festas em geral
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box style={{ textAlign: "center", justifyContent: "center" }}>
            <img
              src="/icone1.png"
              alt="imagem"
              width="178.29px"
              height="120px"
              loading="lazy"
            />
            <Typography
              style={{
                fontSize: "1.6rem",
                color: "#168D63",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Custos menores
            </Typography>
          </Box>

          <Box style={{ textAlign: "center", justifyContent: "center" }}>
            <img
              src="/icone2.png"
              alt="imagem"
              width="120px"
              height="120px"
              loading="lazy"
            />
            <Typography
              style={{
                fontSize: "1.6rem",
                color: "#168D63",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Previsibilidade de or??amento
            </Typography>
          </Box>
          <Box style={{ textAlign: "center", justifyContent: "center" }}>
            <img
              src="/icone3.png"
              alt="imagem"
              width="120px"
              height="120px"
              loading="lazy"
            />
            <Typography
              style={{
                fontSize: "1.6rem",
                color: "#168D63",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              capital movimentado
            </Typography>
          </Box>
        </Grid>
      </section>
      <section
        style={{
          height: "100%",
          backgroundColor: "#ECF0F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(/bg.png)`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ paddingRight: "1.2rem" }}
            image="/img-card.png"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                sx={{
                  color: "#168D63",
                  fontSize: "3.2rem",
                  paddingBottom: "1.6rem",
                }}
              >
                Nossa Hist??ria
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                style={{ paddingRight: "1.2rem" }}
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
          height: "80%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1992.0861817976404!2d-59.978129!3d-3.048464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab2fbbd0fc087e32!2sAuto%20onibus%20lider!5e0!3m2!1spt-BR!2sbr!4v1640270546881!5m2!1spt-BR!2sbr"
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
                color: "#168D63",
              }}
            >
              Trabalhe conosco
            </Typography>
            <Divider
              style={{
                width: "100%",
                maxWidth: 560,
                backgroundColor: "#168D63",
              }}
            />
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "lighter",
                color: "#747678",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              Envie seu curriculum para nosso setor de RH para analise.
              <br />
              Assim que tivermos vaga dispon??vel entraremos em contato.
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
                label="Fale um pouco sobre voc??"
                multiline
                rows={4}
              />
              <input type="file"></input>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#168D63",
                  color: "#FFFFFF",
                }}
              >
                Enviar
              </Button>
              {/* <form action="https://formspree.io/f/xknkdnoa" method="POST">
                <label>
                  Seu email:
                  <input type="email" name="_replyto" />
                </label>
                <label>
                  Sua mensagem:
                  <textarea name="message"></textarea>
                </label>

                <button type="submit">Enviar</button>
              </form> */}
              {/* <ContactForm /> */}
            </Box>
          </Grid>
        </Grid>
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
              paddingTop: "4rem",
            }}
          >
            <Typography
              style={{
                fontSize: "3.2rem",
                color: "#FFF",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "right",
              }}
            >
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
              contato@lidertransportes.com.br
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "self-end",
            justifyContent: "center",
          }}
        >
          {/* <Typography style={{ color: "white", paddingRight: "2rem" }}>
            Cookies
          </Typography> */}
          <Typography style={{ color: "white", paddingRight: "2rem" }}>
            ?? 2020. Amazon Lider. All Rights Reserved.
          </Typography>
          {/* <Typography style={{ color: "white" }}>
            Pol??tica de Privacidade
          </Typography> */}
        </Grid>
      </section>
    </div>
  );
};
