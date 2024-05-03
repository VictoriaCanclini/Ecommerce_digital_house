import styles from "./CardProduct.module.css";

interface Product {
  name: string;
  type: string;
  image: string;
  price: number;
}

export const CardProduct = ({ product }: { product: Product }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.type}</p>
          <p className={styles.cardPrice}>
            price, <small>00</small>
          </p>
        </div>
        <button className={styles.cardButton}>Add tu cart</button>
      </div>
    </div>
  );
};
