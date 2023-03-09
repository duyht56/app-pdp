import AEG from "../../styles/module-styles/ProductDescription/ProductDescription.module.scss";
// import Electrolux from "../../styles/module-styles/ProductDescription/ProductDescription.Electrolux.module.scss";
import dynamic from "next/dynamic";
// import useCssModules from "../../shared/useCssModule";

const ProductDescription = ({
  productName,
  productHeading,
  productPrice,
  brand,
}) => {
  // const theme = brand === "Electrolux" ? Electrolux : AEG;
  // const Theme2 = useCssModules(brand, "ProductDescription");
  //   console.log("theme2", theme2);
  let styles;
  styles = AEG;
  return (
    <>
      <div className={styles["productDescription"]}>
        <div className={styles["product-landing-title"]}>
          <div className={styles["product-landing__model-id"]}>
            {productName}
          </div>
          <div className={"product-landing__model-name"}>{"aaaaaaaa"}</div>
          <div
            className={"product-landing__description-link"}
            data-component="ScrollTo"
            data-scroll-to-target=".product-description"
          >
            <span className={styles["product-landing__description-link-text"]}>
              Product Information
            </span>
            <span className={styles["product-landing__description-link-icon"]}>
              <svg
                viewBox="0 0 20 20"
                className="SvgIcon SvgIcon--circle-chevron-down"
              >
                <circle cx="10" cy="10" r="10"></circle>
                <path d="M6 8.907l4.519 4.303L15 8.907 14.21 8l-3.691 3.637L6.789 8 6 8.907z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className={styles["product-landing__meta"]}>
          <div className={styles["product-landing__rating-energy"]}>
            <div className={styles.rating}>
              <div className={styles["ratingMeter--stars"]}>
                <span className={styles.ratingBar}></span>
                <p className={styles.ratingReviews}>0 (0)</p>
              </div>
            </div>
          </div>
          <div className={styles["D2CPDP-StockPrice"]}>
            <div className={styles["D2CPDP-StockPrice-Left"]}>
              <div className={styles["D2CPDP-StockPrice-Stock"]}>
                <span
                  className={
                    styles["D2CPDP-StockPrice-StockLevel"] +
                    " " +
                    styles["D2CPDP-StockPrice-StockLevel--2"]
                  }
                ></span>
                <span className={styles["D2CPDP-StockPrice-StockMessage"]}>
                  In Stock
                </span>
              </div>
            </div>
            <div className={styles["D2CPDP-StockPrice-Right"]}>
              <div className={styles["D2CPDP-StockPrice-SellPrice"]}>
                {productPrice}
              </div>
            </div>
          </div>
          <button className={styles["D2C-AddToBasketButton"]}>
            <span className={styles["D2C-AddToBasketButton-Text"]}>
              <svg
                data-name="Layer 1"
                viewBox="0 0 32.16 26.09"
                className="SvgIcon SvgIcon--basket"
              >
                <g strokeWidth="2">
                  <path d="M16.08 8.47H1.27l4 16.63h21.7l4-16.63zM23.71 8.29a7.41 7.41 0 00-14.82 0"></path>
                </g>
              </svg>
              <span>Add to cart</span>
            </span>
            <span className="loader" style={{ display: "none" }}></span>
          </button>
          <div className={styles.retailers}>
            <span className={styles["OnlineRetailers-title"]}>
              The product is also available from *
            </span>
          </div>
          <button className={styles["D2C-FindStoreButton"]}>
            <span className={styles["D2C-FindStoreButton-Text"]}>
              <svg viewBox="0 3 14 21" className="SvgIcon SvgIcon--marker">
                <path d="M7 3.9c-3.314 0-6 2.723-6 6.081S3.626 17.244 7 23.1c3.373-5.855 6-9.76 6-13.118S10.314 3.9 7 3.9zm0 8.115c-1.188 0-2.152-.977-2.152-2.181 0-1.205.964-2.18 2.152-2.18 1.188 0 2.152.976 2.152 2.181 0 1.204-.964 2.18-2.152 2.18z"></path>
              </svg>
              <span>Find Store</span>
            </span>
            <span className="loader" style={{ display: "none" }}></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
