function ProductImages({ product }) {
  return (
    <div className="imgs-item">
      <div className="big-img">
        <img id="big-img" src={product.images[0]} alt={product.title} />
      </div>
      <div className="sm-img">
        {product.images.map((image, index) => (
          <img
            src={image}
            alt={product.title}
            key={index}
            onClick={() => (document.getElementById("big-img").src = image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
