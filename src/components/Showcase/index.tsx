import "./styles.scss";

export const Showcase = ({  }) => {
	return (
    <div className="showcase">
      <div className="showcase-container">
        <div className="container-sample">X</div>
        <div className="container-overlay">
          <button>copy SVG</button>
          <button>copy JSX</button>
        </div>
      </div>
      <p className="showcase-title">sample-icon</p>
    </div>
  );
}