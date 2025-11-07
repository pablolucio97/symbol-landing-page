"use client";

import LandingFooter from "@/components/elements/Footer";
import SocialRibbon from "@/components/marketing/SocialRibbon";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <LandingFooter.Root>
      <LandingFooter.Top columns={3}>
        <LandingFooter.Column
          children={
            <Image
              width={120}
              height={120}
              src="/logofooter.webp"
              alt="Logo da Symbol"
              className="object-contain h-20 sm:h-24 rounded-lg"
            />
          }
        />
        <LandingFooter.Column
          items={[
            {
              href: "#quemsomos",
              label: "Quem somos",
            },
            {
              href: "#servicos",
              label: "Clientes",
            },
            {
              href: "#solucoes",
              label: "Soluções",
            },
            {
              href: "#cases",
              label: "Cases de sucesso",
            },
          ]}
          title="Empresa"
        />
        <LandingFooter.Column
          title="Nossas redes"
          children={
            <SocialRibbon
              items={[
                {
                  href: "https://www.facebook.com/SymbolDigitalBR/",
                  iconName: "facebook",
                },
                {
                  href: "https://www.linkedin.com/company/symbol-digitalbr/",
                  iconName: "linkedin",
                },
                {
                  href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwie8v7i9tiQAxUQPrkGHSgDNyoQFnoECCAQAQ&url=https%3A%2F%2Fwww.youtube.com%2F%40symboldigital2280&usg=AOvVaw2Obw6qIPCy3VVbBp46N0Pg&opi=89978449",
                  iconName: "youtube",
                },
              ]}
            />
          }
        />
      </LandingFooter.Top>
      <LandingFooter.Bottom>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground">
            Grupo Symbol Digital © {currentYear}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground/60">
            Desenvolvido por{" "}
            <a
              href="https://www.pablosilvadev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500"
            >
              Pablo Silva
            </a>
          </p>
        </div>
      </LandingFooter.Bottom>
    </LandingFooter.Root>
  );
}
