import ProductDescription from "../ProductDescription/ProductDescription";
import ProductGallery from "../ProductGallery/ProductGallery";
import styles from "../../styles/module-styles/LandingProps.module.scss";
const LandingProps = ({ data }) => {
  console.log(data, "data");
  return (
    <div>
      {console.log("Landing props", data)}
      <section className={styles["product-landing"]}>
        <div className={styles["product-landing__container"]}>
          <div className={styles["product-landing__left"]}>
            <ProductGallery gallery={data.gallery} />
          </div>
          <div className={styles["product-landing__right"]}>
            <ProductDescription
              productName={data.productName}
              productHeading={data.productHeading}
              productPrice={data.price}
              brand={data.brand}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingProps;
