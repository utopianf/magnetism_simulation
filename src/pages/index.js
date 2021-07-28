import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/App"), {
  ssr: false,
});

const Index = () => {
  const router = useRouter();
  router.query;

  return (
    <DynamicComponentWithNoSSR
      initJ={router.query["J"]}
      initDelta1={router.query["delta1"]}
      initDelta2={router.query["delta2"]}
    />
  );
};

export default Index;
