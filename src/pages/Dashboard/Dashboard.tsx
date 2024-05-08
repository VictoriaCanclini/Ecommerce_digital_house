import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { createProduct } from "../../service";
import { Product } from "../../interface";

const Dashboard = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    amiiboSeries: "",
    character: "",
    gameSeries: "",
    head: "",
    image: "",
    name: "",
    releaseDate: "",
    tail: "",
    type: "",
    id: "",
    price: 0,
  });

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) navigate("/login");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation((newProduct: Product) => {
    return createProduct(newProduct);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(product);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Add Product</h1>
      <button onClick={handleHome}>Home</button>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
          <label htmlFor="amiiboSeries">Amiibo Series</label>
          <input
            type="text"
            name="amiiboSeries"
            id="amiiboSeries"
            value={product.amiiboSeries}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="character">Character</label>
          <input
            type="text"
            name="character"
            id="character"
            value={product.character}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="gameSeries">Game Series</label>
          <input
            type="text"
            name="gameSeries"
            id="gameSeries"
            value={product.gameSeries}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="head">Head</label>
          <input
            type="text"
            name="head"
            id="head"
            value={product.head}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="release">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            id="releaseDate"
            value={product.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="tail">Tail</label>
          <input
            type="text"
            name="tail"
            id="tail"
            value={product.tail}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={product.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="id">Id</label>
          <input
            type="text"
            name="id"
            id="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
