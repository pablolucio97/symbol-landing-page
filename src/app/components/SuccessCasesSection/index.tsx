"use client";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import Image from "next/image";

export default function TestimonialsSection() {
  const items = [
    {
      id: 1,
      subtitle:
        "Adaptamos uma estratégia de Lançamento neste cliente, onde conseguimos alcançar em um único dia mais de 100 mil em vendas. Essa estratégia se tornou replicável e aplicamos ela mensalmente.",
      title: "Lançamento",
      imagePath: "/cases/case1.webp",
      imageSize: 385,
    },
    {
      id: 2,
      subtitle:
        "O Instagram destaca-se pelo alto engajamento e entrega de vídeos no Reels. Esse formato é priorizado pelo algoritmo, aumentando a visibilidade das postagens. Além de permitir edições criativas com música e efeitos, os Reels geram mais curtidas, comentários e compartilhamentos, ampliando o alcance e fortalecendo a conexão com o público.",
      title: "Vídeos para Reels",
      imagePath: "/cases/case2.webp",
      imageSize: 500,
    },
    {
      id: 3,
      subtitle: `Utilizando filmagem em 4k e tecnologia de ponta, oferecemos uma nova perspectiva para destacar seu negócio. Vídeos com drones são ideais para mostrar grandes eventos, propriedades imobiliárias, empreendimentos turísticos e muito mais, diferenciando sua marca no mercado e aumentando o engajamento com seu público.`,
      title: "Vídeos institucionais",
      imagePath: "/cases/case3.webp",
      imageSize: 400,
    },
    {
      id: 4,
      subtitle:
        "Integrar um funil de vendas com CRM e um chatbot próprio otimiza o processo, desde a captação até a conversão, proporcionando uma experiência personalizada e eficiente para os clientes",
      title: "Funil de Vendas com CRM e Chat Bot Próprio",
      imagePath: "/cases/case4.webp",
      imageSize: 540,
    },
  ];

  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="cases"
    >
      <Title content="Casos de sucesso" />
      <Subtitle
        content="Veja abaixo alguns dos nossos cases de sucesso."
        weight="light"
      />
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <FadeContainer key={it.id} delay={i * 2}>
            <div
              className="w-full min-h-[50vh] sm:h-[70vh] flex flex-col items-center bg-gradient-to-bl bg-white dark:bg-foreground/5 dark:border-foreground/20 dark:border-2 rounded-md p-12 gap-4"
              key={it.id}
            >
              <Title content={it.title} className="text-center" />
              <Paragraph content={it.subtitle} className=" text-center" />
              <Image
                src={it.imagePath}
                alt="Chatbot"
                width={it.imageSize}
                height={it.imageSize}
              />
            </div>
          </FadeContainer>
        ))}
      </div>
    </section>
  );
}
