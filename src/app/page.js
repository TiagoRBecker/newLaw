"use client";
import Link from "next/link";
import Header from "../components/nav";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGlobe,
  FaHandshakeSimple,
  FaPeopleRoof,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUserInjured,
  FaWhatsapp,
  FaHandcuffs,
  FaScaleBalanced,
  FaHandHoldingDollar,
  FaHandHoldingMedical,
  FaFileMedical,
  FaUserDoctor,
  FaScaleUnbalancedFlip,
} from "react-icons/fa6";

import { useEffect } from "react";
import { GiHealthNormal, GiLoveInjection } from "react-icons/gi";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleGoToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      {/*Banner sobre*/}
      <section id="empresarial" className="w-full h-full">
        <section className="w-full h-full bg-[#293844] flex flex-col items-center justify-center px-4 py-[8rem]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex-col-reverse md:w-full h-full flex md:flex-row gap-5 "
          >
            <div className="w-full md:w-[60%] h-full flex  flex-col relative gap-4 md:border-l-4 md:border-b-4  md:border-t-4  md:border-white py-2 px-4">
              <h1 className="w-full text-white text-left md:text-white bg-[#293844] md:-mt-6 md:ml-7 md:w-1/3 md:text-center text-3xl font-bold uppercase">
                Quem Somos
              </h1>
              <div className="w-full px-0 md:text-justify md:w-[70%] h-full flex items-center justify-center flex-col gap-3  md:px-4   ">
                <p className="text-white text-sm ">
                  Guedes Bampi & Associados é um escritório de advocacia
                  especializado no ramo empresarial, dedicado a fornecer
                  serviços jurídicos de alto nível para empresas. Surgimos no
                  ramo empresarial e expandimos conforme as demandas dos
                  empresários e suas famílias aumentava. Por isso contamos com
                  uma banca de advogados multidisciplinares que proporcionam
                  ampla segurança Jurídica em diversas áreas do Direito. Somos
                  um único escritório para a solução dos mais diversos problemas
                  jurídicos que um empresário possa ter. Atuamos buscando a
                  excelência na defesa dos interesses do nosso cliente e sanando
                  suas necessidades com uma completa orientação jurídica.
                </p>
                <p className="text-white text-sm ">
                  No mundo dos negócios, enfrentar desafios legais é inevitável.
                  É aí que entramos em ação. Pela experiência, compreendemos as
                  complexidades do ambiente empresarial e sabemos como navegar
                  com destreza pelas questões legais que afetam as empresas.
                  Seja em contratos comerciais, proteção de propriedade
                  intelectual, fusões e aquisições, questões de conformidade ou
                  litígios, nossa equipe está preparada para oferecer orientação
                  jurídica estratégica.
                </p>
                <p className="text-white ">
                  Os fundadores, além de advogados, foram empresários por muitos
                  anos e sentiram na pele as dificuldades do empreendedorismo,
                  por isso, o atendimento aos empresários na Guedes Bampi é
                  diferenciado. A excelência no trabalho vem da soma de anos de
                  empreendedorismo com os anos de Advocacia Empresarial. A
                  Guedes Bampi está sempre em busca de novas formas de facilitar
                  a vida dos empresários Brasileiros, permitindo que se ocupem
                  com o empreender, enquanto nós cuidamos dos litígios
                </p>
              </div>
            </div>
            <div className="w-full md:w-[40%] h-full flex items-center justify-center my-auto ">
              <div className="w-full h-full  flex items-center justify-center ">
                <img
                  src="/team.jpg"
                  alt="Team"
                  className="w-full h-auto bg-cover "
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-8 flex items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="flex gap-2 items-center  justify-center w-full px-2"
            >
              <button className="w-full  md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
                Solicitar atendimento
              </button>
            </Link>
          </div>
        </section>
        {/*Servicos*/}
        <section className="business-parallax">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl text-center uppercase font-bold text-white py-8"
          >
            Nossos Serviços{" "}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid-cols-1 w-full px-4 md:w-11/12 mx-auto h-full grid md:grid-cols-3 gap-3  "
          >
            <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#c4a24d] rounded-md sm:mb-4">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Familiar .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className=" w-full  h-full text-[#b28422] flex items-center justify-center">
                  <FaPeopleRoof size={50} color="#b28422" />
                </div>
                <h1>Familiar</h1>
              </Link>
            </div>

            <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Trabalhista .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className="">
                  <FaUserInjured size={50} color="#b28422" />
                </div>
                <h2>Trabalhista</h2>
              </Link>
            </div>

            <div className="h-full w-full py-10 bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Criminalista .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className="">
                  <FaHandcuffs size={50} color="#b28422" />
                </div>
                <h2>Criminalista</h2>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid-cols-1 w-full px-4 md:w-11/12 mx-auto h-full grid md:grid-cols-3 gap-3 mt-2"
          >
            <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Contratual .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className="">
                  <FaHandshakeSimple size={50} color="#b28422" />
                </div>
                <h2>Contratual</h2>
              </Link>
            </div>

            <div className="h-full w-full py-10 bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Empresarial .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className="">
                  <FaScaleBalanced size={50} color="#b28422" />
                </div>
                <h2>Empresarial</h2>
              </Link>
            </div>

            <div className="h-full w-full py-10 bg-[#1D1E2C]    flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Tributário .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                className="flex items-center justify-center flex-col"
                target="_blank"
              >
                <div className="">
                  <FaHandHoldingDollar size={50} />
                </div>
                <h2>Direito Tributário</h2>
              </Link>
            </div>
          </div>
          <div className="w-full h-full mt-10 flex items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="flex gap-2 items-center justify-center w-full px-2"
            >
              <button className="w-full  md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
                Solicitar atendimento
              </button>
            </Link>
          </div>
        </section>
        {/*Banner Civil*/}
        <section className="parallax">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl font-bold text-gray-400  mb-2 uppercase"
          >
            Àreas de Atuação
          </h1>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid-cols-1 md:grid md:grid-cols-5 gap-10 mt-20"
          >
            <div className="services">
              <FaPeopleRoof size={50} />
              Familiar
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito de Familia.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaUserInjured size={50} />
              Trabalhista
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Trabalhista.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaHandcuffs size={50} />
              Criminalista
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Criminal.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaHandshakeSimple size={50} />
              Contratual
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre sobre Contratos.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaScaleBalanced size={50} />
              ...Outros
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-5 flex items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="flex w-full px-2 gap-2 items-center justify-center"
            >
              <button className="w-full md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
                Solicitar atendimento
              </button>
            </Link>
          </div>
        </section>
      </section>
      <section id="civil" className="w-full h-full">
        <section className="w-full h-full bg-[#072137] py-[4rem]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex-col md:flex md:flex-row w-full h-full py-[3rem] px-4"
          >
            <div className="w-full md:w-[40%] h-full flex items-center justify-center  ">
              <img
                src="/team.jpg"
                alt=""
                className="w-full h-auto object-cover rounded-md md:shadow-[21px_24px_0px_0px_#c4a24d,0px_3px_8px_0px_#00000024] "
              />
            </div>
            <div className="w-full md:w-[60%] flex flex-col items-center justify-center  px-10">
              <span className="hidden md:text-[#c4a24d] text-xl  text-left w-full font-bold uppercase">
                Sobre Nós
              </span>
              <h1 className="text-2xl md:text-3xl text-left w-full py-5 font-bold text-[#c4a24d]">
                Bem vindo a Guedes Bampi{" "}
              </h1>
              <div className="w-full">
                <p className="w-full  text-justify md:mb-2 text-gray-400">
                  A Guedes Bampi Advogados Associados é um renomado escritório
                  de advocacia que se destaca por seu atendimento diferenciado,
                  com qualidade e agilidade na solução dos problemas de seus
                  clientes. Com anos de experiência e um time de advogados
                  altamente qualificados, a empresa consolidou sua reputação
                  como a mais completa, principalmente no atendimento de
                  empresas, empresários e suas famílias, oferecendo soluções sob
                  media para uma ampla gama de questões civis. A Guedes Bampi
                  cresce cada vez mais através da indicação dos seus satisfeitos
                  clientes.
                </p>
                <p className="text-gray-400">
                  No âmbito do Direito Civil, a Guedes Bampi Advogados
                  Associados presta serviços abrangentes que abordam as
                  complexidades das relações entre indivíduos e entidades
                  privadas. Seus advogados estão prontos para lidar com qualquer
                  tipo de questões, incluindo as que envolvem contratos,
                  responsabilidade civil, direito das obrigações, propriedade,
                  família e sucessões. O compromisso da Guedes Bampi Advogados
                  Associados com a excelência e a satisfação do cliente é
                  evidente em cada caso que assumem. A equipe trabalha de forma
                  ágil e humanizada para compreender as necessidades e objetivos
                  de seus clientes, desenvolvendo estratégias jurídicas sólidas
                  e eficazes para alcançar os melhores resultados. Além disso, a
                  ética e a integridade estão no cerne da prática da Guedes
                  Bampi Advogados Associados.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full h-full py-[2rem] flex items-center justify-center"
          >
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
              }
              target="_blank"
              className="flex gap-2 w-full px-2 items-center justify-center"
            >
              <button className="w-full md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
                Solicitar atendimento
              </button>
            </Link>
          </div>
        </section>
        {/*Banner Civil*/}
        <section className="parallax">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl font-bold text-gray-400  mb-2 uppercase"
          >
            Àreas de Atuação
          </h1>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid-cols-1 md:grid md:grid-cols-5 gap-10 mt-20"
          >
            <div className="services">
              <FaPeopleRoof size={50} />
              Familiar
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito de Familia.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaUserInjured size={50} />
              Trabalhista
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Trabalhista.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaHandcuffs size={50} />
              Criminalista
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Criminal.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaHandshakeSimple size={50} />
              Contratual
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre sobre Contratos.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
            <div className="services">
              <FaScaleBalanced size={50} />
              ...Outros
              <div className="contact">
                <p>Informações</p>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={50} color="#25D366" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-5 flex items-center justify-center">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="flex w-full px-2 gap-2 items-center justify-center"
            >
              <button className="w-full md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
                Solicitar atendimento
              </button>
            </Link>
          </div>
        </section>
      </section>
      <section id="medico" className="w-full h-full">
      <section  className="w-full h-[calc(100%-80px)] py-[4rem] flex ">
        <div className="hidden md:w-32 bg-[#d8d9e2]"></div>
        <div className="grid-cols-1 md:grid md:grid-cols-2 w-full h-full gap-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col items-center justify-center gap-4 w-full h-full px-8 "
          >
            <h1 className="text-[#022a2e] text-3xl uppercase ">
              Assessoria jurídico especializada na área da saúde{" "}
            </h1>
            <p>
              A Guedes Bampi & Associados é um escritório de advocacia
              especializado no ramo empresarial, dedicado a fornecer serviços
              jurídicos de alto nível para empresas. Oferecemos também um
              serviço especializado para empresários no ramo da saúde e
              estética, atendendo todas as classes profissionais. Uma empresa
              que trabalha nesse ramo precisa seguir regras específicas do
              conselho de classe, além de normas sanitárias, tributárias e
              cíveis diferentes.
            </p>
            <p>
              Nós contamos com advogados especialistas que atuam todos os dias
              na prevenção e na defesa dos direitos de médicos, dentistas,
              biomédicos, farmacêuticos e demais profissionais liberais da área
              da saúde. A Guedes Bampi está sempre em busca de novas formas de
              facilitar a vida dos empresários Brasileiros, permitindo que se
              ocupem com o empreender, enquanto nós cuidamos dos litígios. Para
              isso, contamos com uma banca de advogados multidisciplinares que
              proporcionam ampla segurança Jurídica em diversas áreas do
              Direito. Somos um único escritório para a solução dos mais
              diversos problemas jurídicos que um empresário possa ter. Atuamos
              buscando a excelência na defesa dos interesses do nosso cliente e
              sanando suas necessidades com uma completa orientação jurídica.
            </p>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi+sobre+Direito+M%C3%A9dico+e+da+sa%C3%BAde.+%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              <button className="px-4 py-2 rounded-3xl text-white font-bold bg-[#022a2e] border-2 border-white">
                Solicitar Atendimento
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="hidden md:flex items-center justify-center w-full h-full px-2 "
          >
            <img
              src="/saude2.jpg"
              alt="Doc"
              className="brightness-50 rounded-md "
            />
          </div>
        </div>
        <div className=" hidden md:w-32 bg-[#d8d9e2]"></div>
      </section>
      {/*Sobre*/}
      <section id="sobre" className="w-full h-full bg-[#022a2e] py-[4rem] px-4">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" grid-cols-1 md:w-full h-full md:grid md:grid-cols-2 gap-2"
        >
          <div className=" flex flex-col items-center justify-center px-4">
            <h1 className="text-gray-400 text-left w-full py-4 text-3xl font-bold">
              Sobre nós
            </h1>
            <p className="text-gray-400 px-4 py-4 text-justify text-base">
              A Guedes Bampi Advogados Associados é um renomado escritório de
              advocacia que se destaca por seu atendimento diferenciado, com
              qualidade e agilidade na solução dos problemas de seus clientes.
              Com anos de experiência e um time de advogados altamente
              qualificados, a empresa consolidou sua reputação como a mais
              completa, principalmente no atendimento de empresas, empresários e
              suas famílias, oferecendo soluções sob media para uma ampla gama
              de questões civis. A Guedes Bampi cresce cada vez mais através da
              indicação dos seus satisfeitos clientes.
            </p>
            <p className="text-gray-400 px-4 py-4 text-justify text-base">
              No âmbito do Direito Civil, a Guedes Bampi Advogados Associados
              presta serviços abrangentes que abordam as complexidades das
              relações entre indivíduos e entidades privadas. Seus advogados
              estão prontos para lidar com qualquer tipo de questões, incluindo
              as que envolvem contratos, responsabilidade civil, direito das
              obrigações, propriedade, família e sucessões. O compromisso da
              Guedes Bampi Advogados Associados com a excelência e a satisfação
              do cliente é evidente em cada caso que assumem. A equipe trabalha
              de forma ágil e humanizada para compreender as necessidades e
              objetivos de seus clientes, desenvolvendo estratégias jurídicas
              sólidas e eficazes para alcançar os melhores resultados. Além
              disso, a ética e a integridade estão no cerne da prática da Guedes
              Bampi Advogados Associados.
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/team.jpg"
              alt="Team"
              className="w-full h-full md:h-[500px] rounded-md "
            />
          </div>
        </div>
        <div className="w-full h-full pt-10 flex items-center justify-center py-4">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi+sobre+Assessoria+para+Profissionais+da+Sa%C3%BAde.+%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%252%C2%AA&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <button className="px-4 py-2 rounded-3xl text-[#022a2e] font-bold bg-white border-2 border-white">
              Solicitar Atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Banner Curiosidades*/}
      <section className="w-full h-full ">
        <div className="curiosity ">
          <h1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-4xl text-white font-bold uppercase"
          >
            Você Sabia?
          </h1>
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="grid-cols-1 md:grid md:grid-cols-3 w-full h-full gap-3"
          >
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">190%</h2>
              <div className="ml-0 w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full  ">
                  No{" "}
                  <span className=" font-bold w-full uppercase"> aumento </span>
                  de puniçoes
                </p>
                <p className="text-left w-full  ">nos conselho regional </p>
                <p className="text-left w-full  ">de medicina.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">13%</h2>
              <div className="ml-0 w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full   ">
                  Dos{" "}
                  <span className=" font-bold w-full uppercase">
                    {" "}
                    médicos brasileiros
                  </span>{" "}
                  já{" "}
                </p>
                <p className="text-left w-full  ">foram ou estão sendo</p>
                <p className="text-left w-full  ">processados judicialmente.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">380%</h2>
              <div className="ml-0  w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full ">
                  É o
                  <span className=" font-bold w-full uppercase">
                    {" "}
                    crescimento{" "}
                  </span>{" "}
                  dos processos
                </p>
                <p className="text-left w-full  ">tramitando no conselhos</p>
                <p className="text-left w-full ">regionais de medicina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Serviços*/}
      <section className="w-full h-full bg-[#d8d9e2] py-[4rem]">
        <h1 className="text-4xl py-4  font-bold text-[#022a2e] text-center uppercase">
          Áreas de atuação
        </h1>
        <div className="grid-cols-1  md:grid md:grid-cols-3 w-full gap-5 px-4  ">
       
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <GiHealthNormal size={40} color="white" />
            </div>
            <p className="text-white uppercase text-base">FALHA NA PRESTAÇÃO DE SERVIÇO</p>
          </div>
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
            <FaHandHoldingMedical  size={40} color="white" /> 
            </div>
            <p className="text-white uppercase text-base">Plano de Saúde</p>
          </div>
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <FaFileMedical size={40} color="white" />
            </div>

            <p className="text-white uppercase text-base">
              Documentos / Prontuários
            </p>
          </div>
        </div>
        <div className="grid-cols-1  md:grid md:grid-cols-3 w-full gap-5 px-4 mt-4">
        <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <FaUserDoctor size={40} color="white" />
            </div>
            <p className="text-white uppercase text-base ">PROFISSIONAIS DA SAÚDE</p>
          </div>
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
            <GiLoveInjection size={40} color="white" />
           
            </div>
            <p className="text-white uppercase text-base ">PROFISSIONAIS DA ESTÉTICA E HARMONIZAÇÃO</p>
          </div>
          
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
            <FaScaleUnbalancedFlip size={50} color="white" />
            </div>
            <p className="text-white uppercase text-base ">OUTROS</p>
          </div>
          
        </div>
        <div className="w-full h-full  flex items-center justify-center py-14">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi+sobre+Assessoria+para+Profissionais+da+Sa%C3%BAde.+%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje!"
            }
            target="_blank"
          >
            <button className="bg-[#022a2e] px-4 py-2 rounded-3xl  text-gray-100 font-bold">
              Solicitar Atendimento
            </button>
          </Link>
        </div>
      </section>
      </section>
      <footer className="w-full h-full bg-[#072137]  py-[4rem]">
        <div className="grid-cols-1 gap-8 md:w-full h-full grid md:grid-cols-4 md:gap-4">
          {/*Grid Logo*/}
          <div
            className="flex items-center justify-center w-full  "
            onClick={handleGoToUp}
          >
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#c4a24d] cursor-pointer flex items-center justify-center">
              <img
                src="/icone.png"
                alt="Logo"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>

          {/*Grid Contato*/}
          <div className="flex flex-col  items-center px-4  gap-5">
            <h1 className="block uppercase text-lg text-white w-full text-left">
              Contato
            </h1>
            <div className="w-full flex items-center justify-start gap-4">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank"
                className="w-full flex items-center justify-start gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#c4a24d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h2 className="text-gray-400">(51) 980-519-018</h2>
              </Link>
            </div>

            <div className="w-full flex items-center justify-start gap-4">
              <div className=" flex gap-4 items-center">
                <Link
                  href={"mailto:guedesbampi@gmail.com"}
                  className="w-full flex items-center justify-start gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#c4a24d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <h2 className="  text-gray-400">
                  guedesbampi@gmail.com
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          {/*Grid Menu*/}
          <div className="md:flex flex-col  items-center px-4  gap-5 ">
            <h1 className="block uppercase text-lg text-white w-full text-left ">
              Navegação
            </h1>
            <nav className=" flex w-full gap-2 ">
              <ul className="flex flex-col gap-5 text-gray-400">
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#"}>Home</Link>
                </li>
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#sobre"}>Sobre Nós</Link>
                </li>
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#contato"}>Contato</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/*Grid Midias Socias*/}
          <div className=" md:flex flex-col  items-center px-4    ">
            <h1 className="block uppercase text-lg text-white w-full text-left ">
              Redes Sociais
            </h1>
            <div className="justify-start flex md:flex items-center md:justify-start w-full h-full gap-4 ">
              <div className=" flex justify-start my-2  md: items-center md:justify-center gap-4 ">
                <Link
                  href={"https://www.instagram.com/guedesbampi.adv/"}
                  target="_blank"
                >
                  <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white  ">
                    <FaInstagram size={24} className="insta" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-white py-4 border-t-2 border-[#c4a24d] mt-4 ">
          <p className="">Todos os direitos reservados</p>&copy;
          <p>GuedesBampi</p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-6">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
          }
          target="_blank"
        >
          <div className="pulsar">
            <FaWhatsapp size={50} color="#fff" />
          </div>
        </Link>
      </div>
    </>
  );
}
