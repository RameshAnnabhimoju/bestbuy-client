import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartVisibleToggle } from "../../../api/cartSlice";
import { fetchItem, clearFilters } from "../../../api/itemSlice";
import { createOrder } from "../../../api/orderSlice";
import { addToCart } from "../../../api/cartSlice";
import { CImage, CButton } from "@coreui/react";
import Login from "../../login/LoginContainer";
import ReactStars from "react-stars";
import axios from "../../../api/axios";
export default function ItemDetails() {
  const [loginVisible, setLoginVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(clearFilters());
    setTimeout(() => {
      dispatch(fetchItem(id));
    }, 100);
  }, []);
  const items = useSelector((state) => state.item);
  const user = useSelector((state) => state.user);
  function buynowHandler() {
    if (user.userDate?.user?._id) {
      dispatch(
        createOrder({
          image: items.item.image,
          title: items.item.title,
          category: items.item.category,
          description: items.item.description,
          listingPrice: items.item.listingPrice,
          seller: items.item.seller,
          quantity: 1,
          total: items.item.listingPrice,
          itemId: items.item._id,
          user: user.userData.user._id,
        })
      );
    } else {
      setLoginVisible(true);
    }
  }
  function addToCartHandler() {
    if (user.userData?.user?._id) {
      dispatch(
        addToCart({
          image: items.item.image,
          title: items.item.title,
          category: items.item.category,
          description: items.item.description,
          listingPrice: items.item.listingPrice,
          seller: items.item.seller,
          quantity: 1,
          total: items.item.listingPrice,
          itemId: items.item._id,
          user: user.userData.user._id,
        })
      );
      dispatch(cartVisibleToggle(true));
    } else {
      setLoginVisible(true);
    }
  }
  return (
    <>
      <Login visible={loginVisible} setVisible={setLoginVisible} />

      <div className="top-container">
        <div className="image-container">
          <CImage
            className="item-image"
            rounded
            thumbnail
            src={axios.defaults.baseURL + items.item.image}
            width={200}
            height={300}
          />
        </div>
        <div className="basic-details-container">
          <h4>{items.item.title}</h4>
          <div>
            <h4>Rating:</h4>
            <ReactStars
              className="rating-stars"
              value={4}
              count={5}
              size={50}
              edit={false}
              activeColor="#ffd700"
            />
          </div>

          <div>
            <h4>Price:</h4>
            <div className="price-details">
              <h3 className="price">₹ {items.item.listingPrice}</h3>
              <h3 className="price actual-price">₹ {items.item.actualPrice}</h3>
            </div>
          </div>
          <div>
            <CButton
              className="action-buttons"
              color="primary"
              shape="rounded-pill"
              size="lg"
              onClick={buynowHandler}
            >
              Buy now
            </CButton>
            <CButton
              className="action-buttons"
              color="warning"
              shape="rounded-pill"
              size="lg"
              onClick={addToCartHandler}
            >
              Add to cart
            </CButton>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4>Description:</h4>
      <h5 className="item-description">{items.item.description}</h5>
    </>
  );
}
