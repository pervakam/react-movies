import React from "react";
import "./Pagination.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationCountArray: [],
    };
  }

  paginationCheck = (paginationItem, evt) => {
    this.props.fillRequest(
      this.props.request,
      this.props.movieType,
      paginationItem
    );
    const paginationNewArray = [];
    for (let i = paginationItem - 4; i <= paginationItem + 4; i++) {
      if (i <= Math.ceil(this.props.moviesCount / 10) && i >= 1) {
        paginationNewArray.push(i);
      }
    }
    this.setState({ paginationCountArray: paginationNewArray });

    if (evt.target.textContent === paginationItem) {
      evt.target.classList.add("pagination__button--active");
    }
  };

  fillPaginationList = () => {
    let array = [];
    for (let i = 1; i <= Math.ceil(this.props.moviesCount / 10); i++) {
      array.push(i);
    }

    this.setState({ paginationCountArray: array.slice(0, 5) });
  };

  componentDidMount() {
    setTimeout(() => {
          this.fillPaginationList();
    }, 1000)

  }

  render() {
    return (
      <div className="pagination">
        {this.state.paginationCountArray.map((paginationItem) => (
          <button
            type="button"
            className="pagination__button"            
            key={paginationItem}
            onClick={(evt) => {
              this.paginationCheck(paginationItem, evt);
            }}
          >
            {paginationItem}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
