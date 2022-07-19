import "../../assets/css/bastarArt.css";

import BastarArtImage1 from "../../assets/img/bastarArtImage1.webp";
import BastartArtLogo from "../../assets/img/BastarArtLogo.jpeg";

import BastarPeopleArt from "../../assets/img/bastarPeopleArt.jpeg";
import Bamboo from "../../assets/img/Bamboo.png";
import Bellmetal from "../../assets/img/bellmetal.jpg";
import Bambooart from "../../assets/img/bambooart.jpg";
import Terracotta from "../../assets/img/terracotta.jpg";
import Tumba from "../../assets/img/tumba.jpg";
import Woodcarving from "../../assets/img/woodcarving.jpg";

// components and pages
import React from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Carousel } from "react-responsive-carousel";
// import { useHistory } from "react-router-dom";

const BastarArt = () => {
  // const history = useHistory();

  const TopImgList = [Bellmetal, Bambooart, Terracotta, Tumba, Woodcarving];

  return (
    <div>
      <Header />
      <main className="bastar-art-page badal-page">
        {/*<div className="logo">
          <img src={BastartArtLogo} alt="Badal" />
        </div>*/}

        <section className="welcome-section">
          <div className="text">
            <h2>Kalagudi: Art of Bastar</h2>
            <p>
              Since ancient times, India has been actively working in the field
              of art and craft. A large number of artifacts are found every year
              from thousands years ago and they have actually played a major
              role in defining our culture and depicting the cultural ideologies
              during different period. In India, each of the state has its own
              specific art form which is commonly known as folk art. Bastar art
              is one such trending folk art that belongs to the state of
              Chhattisgarh. Kalagudi is one stop destination that enables access
              to these antediluvian artifacts
            </p>
            <button>
              <a href="https://wa.link/a4khjc">Whatsapp us</a>
            </button>
          </div>

          <div className="image">
            <div className="carousel">
              <Carousel
                showIndicators={false}
                showStatus={false}
                swipeable={true}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
                showThumbs={false}
              >
                {[...TopImgList].map((image, idx) => (
                  <div className="featured-img" key={idx}>
                    <img src={image} alt="Badal" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {/*** Welcome section ends ***/}

        {/** Materials TODO : https://ocherstudio.in/ */}
        <section className="people-section">
          <h2>OUR BASTAR ARTISANS FAMILY</h2>
          <div className="people-container">
            {[...Array(8)].map((_, idx) => (
              <div className="people" key={idx}>
                <img src={BastarPeopleArt} alt="material" />
              </div>
            ))}
          </div>
        </section>

        <section className="about-section odd">
          <div className="left">
            <h2>Bell Metal (Dhokra)</h2>
            <p>
              The bell metal or Dhokra art form is one of the oldest known form
              of metal casting. The researchers have identified that this art
              form dates back to Harrapan and Mohenjo-Daro civilisations. This
              art form has managed to survive even after several dynasties came,
              ruled and fell apart until now when India has become a democracy.
              The tribes of Bastar district are known to have kept this art form
              alive as more than 110 traditional tribal families are still
              making the products using this technique without using any modern
              techniques. The process consists of 13 stages where art and
              science are blended beautifully. The tribes of Bastar widely use
              the process of lost wax technique using the natural resources.
            </p>
            <button>
              <a href="https://wa.link/a4khjc">Whatsapp us</a>
            </button>
          </div>

          <div className="right">
            <div className="featured-img">
              <img src={Bellmetal} alt="Badal" />
            </div>{" "}
          </div>
        </section>
        {/*** About section(bell metal) ends ***/}

        <section className="about-section even">
          <div className="left">
            <h2>Tumba - Bottle Guard</h2>
            <p>
              Tumba is a unique craft which is very popular in Chhattisgarh and
              is hard to find anywhere else in the world. ‘Tumba’ means ‘bottle
              guard’ in the Bustan/ Halbi tribal languages in Chhattisgarh and
              this vegetable is used to make the craft products. Originally,
              Tumba was used by the tribes by hollowing it from the inside and
              storing water in them. From there, decoration of Tumba began and
              now they have become a very unique form of art. In the local
              language, bottle guard is also called ‘Lauki’.
            </p>
            <button>Whatsapp us</button>
          </div>

          <div className="right">
            <div className="featured-img">
              <img src={Tumba} alt="Badal" />
            </div>{" "}
          </div>
        </section>
        {/*** About section(Tumba) ends ***/}

        <section className="about-section odd">
          <div className="left">
            <h2>Bamboo Craft</h2>
            <p>
              The dense forests of Bastar have an abundance of bamboo trees
              which provide a great raw material for the bamboo handicrafts.
              Bamboo craft is a deep rooted culture of the three ethnic groups
              of Bastar district. The craft products so formed are made out of
              bamboo and cane and one of the important aspects is that the
              products are eco-friendly. There are more than 200 different types
              of products that are made out of bamboo. The Kamar tribal of
              Bastar are adept at making items such as bamboo baskets, fish
              traps, mats, bird traps etc. the process of making bamboo crafts
              include cutting the stem, clearing off the leaves and chiselling
              down the bamboo stems.
            </p>
            <button>
              <a href="https://wa.link/a4khjc">Whatsapp us</a>
            </button>
          </div>

          <div className="right">
            <div className="featured-img">
              <img src={Bambooart} alt="Badal" />
            </div>{" "}
          </div>
        </section>
        {/*** About section(Bamboo Crafts) ends ***/}

        <section className="about-section even">
          <div className="left">
            <h2>Wood Carving</h2>
            <p>
              It is one of the beautiful crats of the Bastar tribal people who
              have excelled in this art form and have a decent market within
              India as well as internationally. The tribal mostly use teak wood,
              Indian Rosewood, whitewood and other forms of wood as well widely
              available in the forests of Bastar. The major appeal of the
              products is that they are beautifully painted and lacquered and
              are casted into toys, bedposts, cradle posts, flower vases etc.
              The crat is mostly related to the Muria tribe of Bastar however,
              with increased interaction among the tribes and learning from each
              other, many other tribes have also started working on wooden
              crafts. One of the most striking wooden craft is that of face
              masks that were originally used by the Murias, Marias and the
              Bhatra tribes. These masks are sometimes used for amusement
              purposes and at other times for specific rituals. But outside of
              the tribes, these are mainly used for ornamentation purposes.
            </p>
            <button>
              <a href="https://wa.link/a4khjc">Whatsapp us</a>
            </button>
          </div>

          <div className="right">
            <div className="featured-img">
              <img src={Woodcarving} alt="Badal" />
            </div>{" "}
          </div>
        </section>
        {/*** About section(Wood Carving) ends ***/}

        <section className="about-section odd">
          <div className="left">
            <h2>Terracotta-Clay</h2>
            <p>
              Terracotta is the word that means baked earth and is formed from
              the natural clay form from where it gets its red-brown colour. The
              art form requires less investment and thus is quite popular
              however, the products so formed are quite unique and are known for
              their intricate carvings. Pottery is one of the major source of
              income for the people living in the forests of Bastar. The main
              centres of tribal terracotta in Bastar are Narayanpur-
              Jagdalpur-Gadchiroli range, Kumharpara, Nagarnar, Kondagaon,
              Narainpur and Kanker. Beside these Dantewada, Bastar Kala Gudi
              Hasthshilp Producer Company Ltd. 16 Tumnas, Bhairamgarh, Sukma,
              Kukanar, Kokawad, Karanpur, Choti lohara, Kandaripani, Sandanpur,
              Karar, Mitipura, Deori and Dhansera are also known for the same.
            </p>
            <button>
              <a href="https://wa.link/a4khjc">Whatsapp us</a>
            </button>
          </div>

          <div className="right">
            <div className="featured-img">
              <img src={Terracotta} alt="Badal" />
            </div>{" "}
          </div>
        </section>
        {/*** About section(terra cotta clay) ends ***/}

        <section className="stay-at-badal-section footer-for-bastar-arts">
          <h2>
            Buy @ <span>KALAGUDI</span>
          </h2>

          <p>Purchase Traditional goods at reasonable price.</p>

          <button>
            <a href="https://wa.link/a4khjc">Whatsapp us</a>
          </button>

          <p>
            KALAGUDI powered by
            <span> Travel Bastar</span>
          </p>
        </section>
        {/*** BASTAR ARTS FOOTER section ends ***/}
      </main>
      <Footer />
    </div>
  );
};

export default BastarArt;
