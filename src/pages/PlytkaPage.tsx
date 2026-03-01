import ServicePageLayout from "@/components/ServicePageLayout";
import PlytkaCalc from "@/components/calculators/PlytkaCalc";

const PlytkaPage = () => (
  <ServicePageLayout pageKey="plytka" calculator={<PlytkaCalc />} />
);

export default PlytkaPage;
