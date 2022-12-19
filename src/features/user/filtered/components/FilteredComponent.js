import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MobileFilters from "./MobileFilters";
import TabletFilters from "./TabletFilters";
import LaptopFilters from "./LaptopFilters";
import AudioFilters from "./AudioFilters";
import WatchFilters from "./WatchFilters";
import filterIcon from "../../../../assets/filters.png";
import FilterCategoryComponent from "./FilterCategoryComponent";
import { fetchItemsByfilter } from "../../../api/itemSlice";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CSpinner,
} from "@coreui/react";
function FilteredComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = "https://bestbuy-server.vercel.app/";
  const initialFilter = "";
  const items = useSelector((state) => state.item);
  const [category, setCategory] = useState(initialFilter);
  const categories = {
    mobile: "mobile",
    tablet: "tablet",
    laptop: "laptop",
    audio: "audio",
    watch: "watch",
  };
  function itemClickHandler(e) {
    const { id } = e.target;
    if (id !== "listingPrice" && id !== "actualPrice") {
      navigate("/item/" + id);
    }
  }
  return (
    <>
      <div className="filter-container">
        <div className="Itemfilters">
          <h5 className="filters-title">
            FILTERS <img id="filter-icon" src={filterIcon} alt="" />
          </h5>
          <FilterCategoryComponent var={[category, setCategory]} />
          <br />
          {category === categories.mobile && <MobileFilters />}
          {category === categories.tablet && <TabletFilters />}
          {category === categories.laptop && <LaptopFilters />}
          {category === categories.audio && <AudioFilters />}
          {category === categories.watch && <WatchFilters />}
        </div>
        <div className="filtered-items">
          {items.itemData?.data?.map((data) => {
            return (
              <CCard
                className="itemLink"
                onClick={itemClickHandler}
                key={data._id}
                id={data._id}
              >
                <CCardImage
                  orientation="top"
                  src={url + data.image}
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
    </>
  );
}

export default FilteredComponent;
