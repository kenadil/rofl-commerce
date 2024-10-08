import { Container } from "@mui/material";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Products from "../components/products";
import "react-multi-carousel/lib/styles.css";
import AboutUs from "../components/aboutUs";
import RequestForm from "../components/requestForm";
import Footer from "../components/footer";
import Services from "../components/services";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="commerce-header">
        <Container
          maxWidth="xl"
          component={"section"}
          className="commerce-header-wrapper"
        >
          <Header />
        </Container>
      </div>
      <div className="commerce-about">
        <Container
          maxWidth={"xl"}
          component={"section"}
          className="commerce-about-wrapper"
          sx={{ p: "128px 0" }}
          id={"about"}
        >
          <AboutUs />
        </Container>
      </div>
      <div className="commerce-services">
        <Container
          maxWidth={"xl"}
          component={"section"}
          className="commerce-services-wrapper"
          sx={{ p: "48px 0" }}
          id={"tech"}
        >
          <Services />
        </Container>
      </div>
      <Container
        maxWidth={false}
        component={"section"}
        className="commerce-products-wrapper"
        sx={{ p: "48px 0", background: "#000" }}
        id={"tech"}
      >
        <Products />
      </Container>
      <div className="commerce-form">
        <Container
          maxWidth={"xl"}
          component={"section"}
          className="commerce-form-wrapper"
          sx={{ p: "128px 0" }}
          id={"about"}
        >
          <RequestForm />
        </Container>
      </div>
      <Container
        maxWidth={false}
        component={"footer"}
        className="commerce-footer"
        sx={{ p: "48px 0", background: "#000", color: "#FFF" }}
        id={"about"}
      >
        <Footer />
      </Container>
    </>
  );
};

export default Landing;
