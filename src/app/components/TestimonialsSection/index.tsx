"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Carousel from "@/components/navigation/Swiper";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";

export default function TestimonialsSection() {
  const items = [
    {
      id: 1,
      subtitle:
        "A única empresa de assessoria de marketing que resolveu minha demanda, de maneira assertiva encontrou a equação de sucesso do meu negócio.",
      title: "Rodrigo Félix Gonçalves",
      rating: 5,
      avatarUrl: "/profiles/profile1.png",
    },
    {
      id: 2,
      subtitle:
        "Com certeza recomendo,tivemos um grande avanço nas venda depois que vcs começaram a cuidar de nossa rede social .",
      title: "Kaio Costa",
      rating: 5,
      avatarUrl: "/profiles/profile3.png",
    },
    {
      id: 3,
      subtitle: "Melhor agencia de marketing com google ads e facebook ads",
      title: "Fotografia nutella",
      rating: 5,
      avatarUrl: "/profiles/profile2.png",
    },
    {
      id: 4,
      subtitle:
        "Sempre agíeis e a disposição, equipe e serviços nota 10 muito obrigado",
      title: "Isabela Baptista",
      rating: 5,
      avatarUrl: "/profiles/profile4.png",
    },
  ];

  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto gap-4 py-8 px-4 my-8 scroll-mt-12 sm:scroll-mt-14">
      <Title content="Depoimentos" />
      <Subtitle
        content="Veja o que nossos clientes dizem sobre nós."
        weight="light"
      />
      <div className="flex w-full mt-4">
        <Carousel
          breakpoints={{
            "320": {
              rows: 1,
              slidesPerView: 1,
              spaceBetween: 8,
            },
            "640": {
              rows: 1,
              slidesPerView: 2,
              spaceBetween: 12,
            },
            "768": {
              rows: 1,
              slidesPerView: 2,
              spaceBetween: 16,
            },
            "1024": {
              rows: 1,
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          items={items}
          renderItem={(it) => (
            <TestimonialCard
              key={it.id}
              avatarUrl={it.avatarUrl}
              userName={it.title}
              testimonial={it.subtitle}
              rating={it.rating}
            />
          )}
          rows={1}
          title=" "
          showNavigation={false}
          slidesPerView={3}
          spaceBetween={16}
          loop
          autoPlay
        />
      </div>
    </section>
  );
}
