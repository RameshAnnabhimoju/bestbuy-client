import { useDispatch, useSelector } from "react-redux";
import {
  getHomeItems,
  fetchItemsByfilter,
  setFilters,
  fetchItem,
  clearFilters,
} from "../../../api/itemSlice";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardSubtitle,
  CButton,
} from "@coreui/react";
import { useEffect, useState } from "react";
export default function Homepage() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilters());
    dispatch(getHomeItems());
    setDisplay(true);
  }, []);
  const items = useSelector((state) => state.item);
  const mobileItems = items.itemData.homeItems?.mobileHomeItems
    ? items.itemData.homeItems?.mobileHomeItems
    : [];
  const tabletItems = items.itemData.homeItems?.tabletHomeItems
    ? items.itemData.homeItems?.tabletHomeItems
    : [];
  const laptopItems = items.itemData.homeItems?.laptopHomeItems
    ? items.itemData.homeItems?.laptopHomeItems
    : [];
  const watchItems = items.itemData.homeItems?.watchHomeItems
    ? items.itemData.homeItems?.watchHomeItems
    : [];
  const audioItems = items.itemData.homeItems?.audioHomeItems
    ? items.itemData.homeItems?.audioHomeItems
    : [];
  function seeAllHandler(e) {
    const { name } = e.target;
    console.log(name);
    dispatch(setFilters({ category: name }));
    const query = new URLSearchParams({ category: name }).toString();
    dispatch(fetchItemsByfilter(query));
    setTimeout(() => {
      navigate("/filter");
    }, 100);
  }
  function itemClickHandler(e) {
    const { id } = e.target;
    if (id !== "listingPrice" && id !== "actualPrice") {
      dispatch(fetchItem(id));
      setTimeout(() => {
        navigate("/item/" + id);
      }, 100);
    }
  }
  return (
    <>
      <div className="c">
        <CCard style={{ width: "18rem", marginBottom: "20px" }}>
          <CCardImage
            orientation="top"
            src={
              "https://png.pngitem.com/pimgs/s/109-1097325_iphone-10-boost-mobile-hd-png-download.png"
            }
          />
          <CCardBody>
            <CCardTitle>Mobiles</CCardTitle>
            <CCardText>offers upto 60%</CCardText>
            <CButton name="mobile" onClick={seeAllHandler}>
              See All
            </CButton>
          </CCardBody>
        </CCard>
        <div className="c">
          {display &&
            mobileItems.map((data) => {
              return (
                <CCard
                  className="itemLink"
                  onClick={itemClickHandler}
                  key={data._id}
                  id={data._id}
                >
                  <CCardImage
                    orientation="top"
                    src={axios.defaults.baseURL + data.image}
                    className="image"
                    id={data._id}
                  />

                  <CCardBody className="card-body" id={data._id}>
                    <CCardTitle className="itemTitle" id={data._id}>
                      {data.title}
                    </CCardTitle>
                    <div className="prices" id={data._id}>
                      <CCardTitle id="listingPrice">{`₹${data.listingPrice}`}</CCardTitle>
                      <CCardSubtitle id="actualPrice">{` ₹${data.actualPrice}`}</CCardSubtitle>
                    </div>
                  </CCardBody>
                </CCard>
              );
            })}
        </div>
      </div>

      <div className="c">
        <CCard style={{ width: "18rem", marginBottom: "20px" }}>
          <CCardImage
            orientation="top"
            src={
              "http://blog.bestbuy.ca/wp-content/uploads/2015/12/28676iA7F448DF22A210E2.jpg"
            }
          />
          <CCardBody>
            <CCardTitle>Tablets</CCardTitle>
            <CCardText>offers upto 60%</CCardText>
            <CButton name="tablet" onClick={seeAllHandler}>
              See All
            </CButton>
          </CCardBody>
        </CCard>
        <div className="c">
          {display &&
            tabletItems.map((data) => {
              return (
                <div key={data._id}>
                  <CCard
                    className="itemLink"
                    style={{ width: "18rem" }}
                    onClick={(e) => {
                      console.log(data.id);
                    }}
                  >
                    <CCardImage orientation="top" src={data.image} />
                    <CCardBody>
                      <CCardTitle>{data.title}</CCardTitle>
                      <CCardText>{data.description}</CCardText>
                      <CCardSubtitle>
                        <s>₹{data.actualPrice}</s>
                      </CCardSubtitle>
                      <CCardTitle>{`₹${data.listingPrice}`}</CCardTitle>
                    </CCardBody>
                  </CCard>
                </div>
              );
            })}
        </div>
      </div>

      <div className="c">
        <CCard style={{ width: "18rem", marginBottom: "20px" }}>
          <CCardImage
            orientation="top"
            src={
              "https://assets.telegraphindia.com/telegraph/2020/Nov/1605478088_6c-acer.jpg"
            }
          />
          <CCardBody>
            <CCardTitle>Laptops</CCardTitle>
            <CCardText>offers upto 60%</CCardText>
            <CButton name="laptop" onClick={seeAllHandler}>
              See All
            </CButton>
          </CCardBody>
        </CCard>
        <div className="c">
          {display &&
            laptopItems.map((data) => {
              return (
                <div key={data._id}>
                  <CCard
                    className="itemLink"
                    style={{ width: "18rem" }}
                    onClick={(e) => {
                      console.log(data.id);
                    }}
                  >
                    <CCardImage orientation="top" src={data.image} />
                    <CCardBody>
                      <CCardTitle>{data.title}</CCardTitle>
                      <CCardText>{data.description}</CCardText>
                      <CCardSubtitle>
                        <s>₹{data.actualPrice}</s>
                      </CCardSubtitle>
                      <CCardTitle>{`₹${data.listingPrice}`}</CCardTitle>
                    </CCardBody>
                  </CCard>
                </div>
              );
            })}
        </div>
      </div>

      <div className="c">
        <CCard style={{ width: "18rem", marginBottom: "20px" }}>
          <CCardImage
            orientation="top"
            src={
              "https://images.indianexpress.com/2019/10/audio-launches-this-week-759.jpg"
            }
          />
          <CCardBody>
            <CCardTitle>Audio</CCardTitle>
            <CCardText>offers upto 60%</CCardText>
            <CButton name="audio" onClick={seeAllHandler}>
              See All
            </CButton>
          </CCardBody>
        </CCard>
        <div className="c">
          {display &&
            audioItems.map((data) => {
              return (
                <div key={data._id}>
                  <CCard
                    className="itemLink"
                    style={{ width: "18rem" }}
                    onClick={(e) => {
                      console.log(data.id);
                    }}
                  >
                    <CCardImage orientation="top" src={data.image} />
                    <CCardBody>
                      <CCardTitle>{data.title}</CCardTitle>
                      <CCardText>{data.description}</CCardText>
                      <CCardSubtitle>
                        <s>₹{data.actualPrice}</s>
                      </CCardSubtitle>
                      <CCardTitle>{`₹${data.listingPrice}`}</CCardTitle>
                    </CCardBody>
                  </CCard>
                </div>
              );
            })}
        </div>
      </div>
      <div className="c">
        <CCard style={{ width: "18rem", marginBottom: "20px" }}>
          <CCardImage
            orientation="top"
            src={
              "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Fitbit_Sense_2_Gold_Kopie.jpeg"
            }
          />
          <CCardBody>
            <CCardTitle>Watches</CCardTitle>
            <CCardText>offers upto 60%</CCardText>
            <CButton name="watch" onClick={seeAllHandler}>
              See All
            </CButton>
          </CCardBody>
        </CCard>
        <div className="c">
          {display &&
            watchItems.map((data) => {
              return (
                <div key={data._id}>
                  <CCard
                    className="itemLink"
                    style={{ width: "18rem" }}
                    onClick={(e) => {
                      console.log(data.id);
                    }}
                  >
                    <CCardImage orientation="top" src={data.image} />
                    <CCardBody>
                      <CCardTitle>{data.title}</CCardTitle>
                      <CCardText>{data.description}</CCardText>
                      <CCardSubtitle>
                        <s>₹{data.actualPrice}</s>
                      </CCardSubtitle>
                      <CCardTitle>{`₹${data.listingPrice}`}</CCardTitle>
                    </CCardBody>
                  </CCard>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
