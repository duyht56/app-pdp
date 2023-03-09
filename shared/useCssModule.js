import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function useCssModules(theme, cssModule) {
  return dynamic(() =>
    import(
      `../styles/module-styles/ProductDescription/${cssModule}.Electrolux.module.scss`
    )
  );
}

export default useCssModules;
