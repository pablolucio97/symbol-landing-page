"use client";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import Button from "@/components/buttons/Button";
import InfoCard from "@/components/cards/InfoCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  FunnelSimpleIcon,
  InstagramLogoIcon,
  PresentationChartIcon,
  ShareNetworkIcon,
  TrendUpIcon,
  CopySimpleIcon,
} from "@phosphor-icons/react";

export default function SolutionsSection() {
  const services = [
    {
      title: "Gestão de Redes Sociais",
      description:
        "Planejamento e gestão diária de conteúdo com calendário editorial, copy, artes e métricas para Instagram, Facebook, TikTok e LinkedIn.",
      icon: <ShareNetworkIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
    {
      title: "Vídeos para Reels",
      description:
        "Roteiro, captação/edição vertical, legendas dinâmicas e templates para aumentar alcance em Reels, Shorts e TikTok.",
      icon: <InstagramLogoIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
    {
      title: "Vídeos Institucionais",
      description:
        "Produção de vídeos institucionais e de produto com roteiro, locução e identidade visual para sites, apresentações e campanhas.",
      icon: <PresentationChartIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
    {
      title: "Funil de Vendas com CRM e Chatbot Próprio",
      description:
        "Implantação de funil completo com CRM, automações, chatbot e integrações para captar, nutrir e converter leads.",
      icon: <FunnelSimpleIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
    {
      title: "Gestão de Tráfego",
      description:
        "Planejamento e otimização de campanhas (Meta/Google), testes A/B, pixels/conversões e relatórios de ROI.",
      icon: <TrendUpIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
    {
      title: "Criação de encartes publicitários",
      description:
        "Planejamento e criação de encartes publicitários para drogarias. Destaquie seus produtos e promoções, aumentando a visibilidade e impulsionando as vendas.",
      icon: <CopySimpleIcon className="w-12 h-12 text-primary-500" />,
      children: (
        <div className="w-full flex justify-end mt-4">
          <Button
            label="Fale com um Especialista"
            className="bg-primary-500 text-white font-bold"
          />
        </div>
      ),
    },
  ];
  return (
    <section
      className="w-full flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="solucoes"
    >
      <Title content="Soluções" />
      <Subtitle content="O que fazemos?" weight="light" />
      <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {services.map((service, i) => (
          <RevealContainer key={service.title} delay={i * 2}>
            <InfoCard
              key={service.title}
              title={service.title}
              text={service.description}
              icon={service.icon}
              children={service.children}
            />
          </RevealContainer>
        ))}
      </div>
    </section>
  );
}
