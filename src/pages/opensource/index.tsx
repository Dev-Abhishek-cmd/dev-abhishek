import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "@/src/containers/opensourceCharts/OpensourceCharts";
import Organizations from "@/src/containers/organizations/Organizations";
import PullRequests from "@/src/containers/pullRequests/PullRequests";
import Issues from "@/src/containers/issues/Issues";
import TopButton from "@/src/components/topButton/TopButton";
import { chosenTheme } from "../theme";

const Opensource = () => {
  const theme = chosenTheme
  return (
    <div className="opensource-main">
      <Header theme={theme} />
      <Organizations theme={theme} />
      <OpensourceCharts theme={theme} />
      <PullRequests theme={theme} />
      <Issues theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Opensource;
