const Product = ({ data, test }) => {
  console.log(data);
  return (
    <>
      <div>
        <img src={data.image} alt={data.title} style={{ width: 100 }} />
        <p>{data.title}</p>
        <p>{data.price}</p>
        <p>{data.category}</p>
        <p>{data.rating.rate}</p>
        <p></p>
        <p></p>
      </div>
    </>
  );
};

export default Product;
