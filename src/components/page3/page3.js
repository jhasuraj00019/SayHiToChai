import React from "react";
import "./page3.css";
import axios from "axios";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgb(0, 0, 0, 0.4)",
    overflow: "auto",
    zIndex: "5",
    // duration: "250",
    // transform: "translateY(0%)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "446px",
    padding: "22px",
    transform: "translate(-50%, -50%)",
    position: "relative",
    overflow: "visible",
    // marginTop: "0.5%",
    marginTop: "82px",
    color: "rgb(39, 37, 33)",
    fontFamily: "Montserrat,sans-serif",
    // fontSize: "24px",
    // lineHeight: "21px"
  },
};

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "Drinks",
      menu: [],
      orders: {},
      totalItems: 0,
      subTotal: 0,
      modelIsopen: false,
      modelItem: {},
      hover: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:8008/api/drinks",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => this.setState({ menu: response.data.drinks }))
      .catch((err) => console.log(err));
  }

  menuChange = (event) => {
    let value = event.target.value;

    axios({
      method: "GET",
      url: `http://localhost:8008/api/${value}`,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        let item = response.data.desserts
          ? response.data.desserts
          : response.data.drinks;
        this.setState({ menu: item, item: value });
      })
      .catch((err) => console.log(err));
  };

  addItem = (item, orders, process = undefined) => {
    let key = item.name;
    let totalItems = 0;
    let total = 0;
    if (process === "minus") {
      // orders[key].qty
      if (orders[key]) {
        orders[key].qty === 1 ? delete orders[key] : orders[key].qty--;
      }
      console.log("item.qty", item.qty, typeof item.qty);
      console.log("orders", orders);
    } else if (orders[key]) {
      // console.log("already added", orders[key]);
      orders[key].qty++;
    } else {
      item["qty"] = 1;
      // let qty = orders.key.qty ? orders.key.qty : 0;
      orders[key] = item;
    }

    // this.setState({ orders: orders });

    function calculateTotalItems() {
      Object.keys(orders).map((key) => {
        totalItems = totalItems + orders[key].qty;
        total = total + Number(orders[key].price) * orders[key].qty;
        // console.log("totalItems", totalItems);
      });
    }

    calculateTotalItems();
    this.setState({
      totalItems: totalItems,
      subTotal: total,
      modelIsopen: true,
      modelItem: item,
      orders: orders,
    });
    console.log(this.state.menuItem);
  };

  remove = (orders, item) => {
    // console.log(orders);
    delete orders[item];
    // console.log(orders);
    let totalItems = 0;
    let total = 0;
    function calculateTotalItems() {
      Object.keys(orders).map((key) => {
        totalItems = totalItems + orders[key].qty;
        total = total + Number(orders[key].price);
        // console.log("totalItems", totalItems);
      });
    }
    calculateTotalItems();
    this.setState({ totalItems: totalItems, subTotal: total });
    // console.log(orders)
    this.setState({ orders: orders });
  };

  handleModal = (state, value) => {
    const { modelIsopen } = this.state;
    if (value === true) {
      value = false;
    } else {
      value = true;
    }
    this.setState({ [state]: value });
  };

  // style = (image) => {
  //   return {
  //     background: `linear-gradient(top, rgba(218, 218, 218, 0), rgba(218, 218, 218, 0)), url(${image})`,
  //   };
  // };

  render() {
    let {
      menu,
      orders,
      totalItems,
      subTotal,
      modelIsopen,
      modelItem,
      item,
      hover,
    } = this.state;

    console.log(orders);
    // let i = Object.keys(orders).length;
    // let a = ;
    return (
      <React.Fragment>
        <body id="body">
          <h1 id="pageTitle">Online Ordering</h1>
          <div id="top">
            <div class="order">
              {/* <div id="ord1"><p>Order can't be placed right now</p></div> */}
              <span class="p3left">
                <div class="sign-up menu">
                  <span id="avtaar"></span>
                  <span>
                    <p>Hi, Guest</p>
                  </span>
                </div>
                <div class="">
                  {/* <!-- <label for="menu"></label> --> */}
                  <select
                    class="opt"
                    name="menu"
                    id="menu"
                    onChange={this.menuChange}
                  >
                    {/* <!-- <option class="opt" value="">Menu</option> --> */}
                    <option class="opt" value="drinks">
                      drinks
                    </option>
                    <option class="opt" value="desserts">
                      desserts
                    </option>
                  </select>
                </div>
              </span>
              <span class="p3mid">
                <section>
                  <h2>Menu</h2>
                  <hr />

                  <h1>{item.toUpperCase()}</h1>
                  <p>
                    {item === "Drinks"
                      ? "A Drink that makes you feel fresh again"
                      : "A Dessert that gives you delight"}
                  </p>
                </section>
                <div class="cards">
                  {menu.map((item) => {
                    // const style = {
                    //   style1: {
                    //     background: `url(${item.image})`,
                    //     backgroundSize: "cover",
                    //     transition: "height 0.5s, margin 0.5s, ease-out",
                    //   },

                    //   hover: {
                    //     background: `radial-gradient(#e66465, #9198e5), url(${item.image})`,
                    //   },
                    // };
                    return (
                      <div class="item card1">
                        <div
                          id="imageContainer"
                          // style={{
                          //   background: `url(${item.image})`,
                          //   height: "68%",
                          //   width: "100%",
                          //   transition: "height 0.5s, margin 0.5s, ease-out",
                          //   backgroundSize: "cover",
                          // }}
                        >
                          <img src={item.image} />
                        </div>
                        <div id="cardBottom">
                          <div id="productInfo">
                            <h3>{item.name}</h3>
                            <b>&#8377;{item.price}</b>
                            <p>{item.description}</p>
                          </div>

                          <h4
                            id="crdItm1"
                            value={item.id}
                            onClick={() => this.addItem(item, orders, "add")}
                            className="button"
                          >
                            {" "}
                            +{" "}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </span>
              <span class="p3right">
                <div class="myOrders">
                  <div class="count">
                    <span class="rLeft">
                      <small>My Orders</small>
                    </span>
                    <span class="rRight">
                      <small class="orderCount">{`${totalItems} items`}</small>
                    </span>
                  </div>

                  <div className="itemListContainer">
                    {Object.keys(orders).map((item) => {
                      return (
                        <div className="itemList">
                          <div className="itemNames">
                            <small>
                              {orders[item].qty} &times; {orders[item].name}
                            </small>
                          </div>
                          <span className="itemQty orderCount">
                            &#8377; {orders[item].qty * orders[item].price}
                            <button
                              className="remove"
                              onClick={() =>
                                this.remove(orders, item, totalItems)
                              }
                            >
                              {" "}
                              &#10006;
                            </button>
                          </span>
                          {/* <span>
                          </span> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="subTotal">SubTotal- &#8377;{subTotal}</div>
                <div class="ordbtn">
                  <button id="orderNowBtn">Order Now</button>
                </div>
              </span>
            </div>
          </div>

          {/* <div className="modalDiv">
            
          </div> */}
          <Modal isOpen={modelIsopen} style={customStyles} pscrollable={true}>
            <button
              className="modelCloseBtn"
              onClick={() => this.handleModal("modelIsopen", true)}
            >
              &#10006;
            </button>
            <div>
              <img className="modelImage" src={modelItem.image} />
              <h2>{modelItem.name}</h2>
              <p>&#8377; {modelItem.price}</p>
              <p className="description">{modelItem.description}</p>
              <br />
              <input
                className="specialRequest"
                type="text"
                placeholder="Special Request?"
              />
              <hr className="specialRqHr" />
              <p className="extraCharges">*Extra Charges may apply</p>

              <div>
                <p className="left quantity">Quantity</p>

                <span className="right modelQuantity">
                  <button
                    className="modelItemBtn"
                    onClick={() => this.addItem(modelItem, orders, "add")}
                  >
                    &#10010;
                  </button>{" "}
                  <span className="qty">{modelItem.qty}</span>
                  <button
                    className="modelItemBtn"
                    onClick={() => this.addItem(modelItem, orders, "minus")}
                  >
                    &minus;
                  </button>
                </span>
              </div>
            </div>
            <div className="addItemBtn">
              <button onClick={() => this.handleModal("modelIsopen", true)}>
                + Add Item
              </button>
            </div>
          </Modal>
        </body>
      </React.Fragment>
    );
  }
}

export default Order;
