import dynamic from "next/dynamic";

export const getDynamicComponents = (name) => {
  return dynamic(() => import(`/components/${name}/${name}`), {
    suspense: true,
  });
};

export const getRemoteComponents = (name) => {
  switch (name) {
    case "Footer":
      return dynamic(() => import("landing/Footer"), {
        ssr: false,
      });
      break;
    case "Header":
      return dynamic(() => import("landing/Header"), {
        ssr: false,
      });
      break;
  }
};

export const getPageData = async (lang, urlSlug, preview) => {
  const code = "dPMklq1sLlX8m3TFDwCr8oJ_8S4xtPlWhazobCTppsgcAzFuRZ6Lww==";
  const headers = {
    hostName: "elxa2qaazf01.azurewebsites.net",
    language: lang,
    brand: "Electrolux",
    "Access-Control-Max-Age": "600",
  };
  if (preview) {
    headers.preview = true;
  }
  const response = await fetch(
    `https://elxa2qaazf01.azurewebsites.net/api/GetPage?code=${code}&urlSlug=${urlSlug}/`,
    { headers }
  );
  const data = response.json();
  return data;
};

export const getUrlSlug = (slug) => {
  slug = slug.split("?");
  return {
    urlSlug: slug[0],
    preview: slug[1] === "preview=" ? true : false,
  };
};

export const getComponentsAndComponentsData = (pageData) => {
  const comps = [
    "LandingProps",
    "BenefitsProps",
    "DetailProps",
    "ProductInformation",
    "VideoGallery",
  ];
  const components = [];
  const componentData = [];
  pageData.components.forEach((component, i) => {
    if (component.name === "Footer" || component.name === "Header") {
      components.push(getRemoteComponents(component.name));
      componentData.push(component.props);
    } else {
      if (comps.indexOf(component.name) !== -1) {
        components.push(getDynamicComponents(component.name));
        componentData.push({ ...component.props });
      }
    }
  });

  return {
    components,
    componentData,
  };
};
