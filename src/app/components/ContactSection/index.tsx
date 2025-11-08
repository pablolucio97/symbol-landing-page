"use client";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Title from "@/components/typography/Title";
import { handleStartWhatsAppConversation } from "@/utils/whatsapp";

export default function ContactSection() {
  return (
    <section
      className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14"
      id="contato"
    >
      <Title content="Como podemos ajudar seu projeto?" />
      <ZoomContainer once>
        <Button
          label="Fale com um Especialista"
          className="bg-primary-500 text-white font-bold"
          onClick={handleStartWhatsAppConversation}
        />
      </ZoomContainer>
    </section>
  );
}
