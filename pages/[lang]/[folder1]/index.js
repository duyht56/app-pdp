import { Suspense } from "react";
import styles from "/styles/Home.module.scss";
import {
  getPageData,
  getUrlSlug,
  getComponentsAndComponentsData,
} from "/shared/SharedComponent";

export const getServerSideProps = async (context) => {
  const { urlSlug, preview } = getUrlSlug(context.resolvedUrl);
  const lang = context.params.lang;
  try {
    const pageData = await getPageData(lang, urlSlug, preview);
    if (!pageData) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
    return {
      props: {
        pageData,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};

const Folder1 = ({ pageData }) => {
  const { components, componentData } =
    getComponentsAndComponentsData(pageData);
  return (
    <div className={styles.container}>
      {components &&
        components.map((Component, index) => (
          <Suspense key={index} fallback={`...loading`}>
            <Component data={componentData[index]} />
          </Suspense>
        ))}
    </div>
  );
};

export default Folder1;
