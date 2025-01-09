import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Products.module.css";
import { Product } from "../Product/Product";

export function Products({ products, headerText }) {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </CenteredContent>
  );
}
