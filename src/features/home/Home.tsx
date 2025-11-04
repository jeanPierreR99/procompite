// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Aliance from "./components/Aliance";
import ContactForm from "./components/ContactForm";
import ProCompite from "./components/ProCompite";
import Requisitos from "./components/Requisitos";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import PreviewModal from "./components/modal/PreviewModal";
import NoticeCard from "./components/NoticeCard";
import ComunicationsModal from "./components/ComunicationsModal";
import ComunicationsHome from "./components/ComunicationsHome";

const Home = () => {
  const [showModal1, setShowModal1] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    setShowModal1(true);
    // setShowModal2(true);
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      <Section1 />
      <Section2 />
      <Requisitos />
      {/* <Section3 /> */}
      <NoticeCard />
      <ComunicationsHome />
      <Section4 />
      <Section5 />
      <ContactForm />
      <ProCompite />
      <Aliance />

      {showModal1 && (
        <PreviewModal
          type="pdf"
          url={[
            "./doc/comunicado.pdf",
            "./doc/procompite-elegibilidad-tecnica.pdf",
            "https://www.gob.pe/institucion/munitambopata/normas-legales/7364131-349-2025-mpt-a"
          ]}
          onClose={() => setShowModal1(false)}
        />
      )}
      <ComunicationsModal />

      {/* {showModal2 && (
        <PreviewModal
          type="image"
          url="/banner-modal.jpg"
          onClose={() => setShowModal2(false)}
        />
      )} */}
    </div>
  );
};

export default Home;
