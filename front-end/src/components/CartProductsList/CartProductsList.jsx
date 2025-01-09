import { CartProduct } from "../CartProduct/CartProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductsList.module.css";

export function CartProductsList({ products }) {
  console.log(products);
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
