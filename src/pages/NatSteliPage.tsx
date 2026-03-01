import ServicePageLayout from "@/components/ServicePageLayout";
import NatSteljCalc from "@/components/calculators/NatSteljCalc";

const NatSteliPage = () => (
  <ServicePageLayout pageKey="natsteli" calculator={<NatSteljCalc />} />
);

export default NatSteliPage;
