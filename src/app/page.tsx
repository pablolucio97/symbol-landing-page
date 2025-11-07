import ContactSection from "./components/ContactSection";
import CustomersSection from "./components/CustomersSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroductionSection from "./components/IntroductionSection";
import MetricsSection from "./components/MetricsSection";
import SolutionsSection from "./components/SolutionsSection";
import SuccessCasesSection from "./components/SuccessCasesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      <Header />
      <TopSection />
      <IntroductionSection />
      <CustomersSection />
      <SolutionsSection />
      <MetricsSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
