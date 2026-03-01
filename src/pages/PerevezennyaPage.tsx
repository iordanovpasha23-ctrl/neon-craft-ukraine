import ServicePageLayout from "@/components/ServicePageLayout";
import MizhmistiCalc from "@/components/calculators/MizhmistiCalc";

const PerevezennyaPage = () => (
  <ServicePageLayout pageKey="perevezennya" calculator={<MizhmistiCalc />} />
);

export default PerevezennyaPage;
