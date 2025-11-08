import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ScrollButton from "@/components/buttons/ScrollButton";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-13 sm:scroll-mt-142 min-h-[40vh]"
      id="quemsomos"
    >
      <Title content="Quem somos" />
      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <div className="w-full lg:w-2/3 flex flex-col items-center gap-4">
          <RevealContainer once>
            <Paragraph
              content="Somos especialistas em Growth Marketing, CRM Chat Bot para o time Comercial e Produtora Audio Visual, oferecendo estratégias personalizadas para impulsionar o sucesso da sua empresa."
              className="text-base sm:text-lg"
            />
          </RevealContainer>
          <RevealContainer once>
            <div>
              <span className="text-foreground text-base sm:text-lg">
                Se você busca um parceiro comprometido com seu{" "}
                <strong className="text-primary-500 text-base sm:text-lg">
                  sucesso
                </strong>
                , entre em contato com o{" "}
                <strong className="text-primary-500 text-base sm:text-lg">
                  Grupo Symbol Digital
                </strong>{" "}
                hoje mesmo. Estamos prontos para{" "}
                <strong className="text-primary-500 text-base sm:text-lg">
                  impulsionar seu crescimento
                </strong>{" "}
                e ajudar a escrever sua próxima{" "}
                <strong className="text-primary-500 text-base sm:text-lg">
                  história de sucesso!
                </strong>
              </span>
            </div>
            {/* <Paragraph
              content="Se você busca um parceiro comprometido com seu sucesso, entre em contato com o Grupo Symbol Digital hoje mesmo. Estamos prontos para impulsionar seu crescimento e ajudar a escrever sua próxima história de sucesso!"
              className="text-center"
            /> */}
          </RevealContainer>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <FadeContainer>
            <Image
              src="/team.png"
              alt="Chatbot"
              width={800}
              height={800}
              className="min-w-[24vw] mt-8"
            />
            {/* <PandaVideoPlayer
              videoId="5b858a22-915a-4493-9fc2-dfb74da90470"
              zone="d031816a-48f"
            /> */}
            <div className="w-[95%] h-2 bg-gradient-to-r from-primary-500 to-primary-500 via-primary-800 mx-auto mt-1 rounded-xs"></div>
          </FadeContainer>
        </div>
      </div>
      <ScrollButton />
    </section>
  );
}
