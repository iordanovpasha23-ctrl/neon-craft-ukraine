import ServicePageLayout from "@/components/ServicePageLayout";
import ElektrykaCalc from "@/components/calculators/ElektrykaCalc";

const ElektrykaPage = () => (
  <ServicePageLayout pageKey="elektryka" calculator={<ElektrykaCalc />} />
);

export default ElektrykaPage;
