
import Layout from "@/components/layout/Layout";
import Clients from "@/components/sections/home2/Clients";
import FaqPage from "@/components/sections/innersection/FaqPage";

export default function PlaceJob_Page() {

  return (
    <Layout
      headerStyle={1}
      footerStyle={2}
      breadcrumbTitle="FAQ'S"
      breadcrumbTitleTwo="Things You Need to Know and We Know You Need"
      breadcrumbTitleThree="Employers"
    >
      <FaqPage/>

      <Clients />
    </Layout>
  );
}
