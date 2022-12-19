import React, { useState } from "react";
import MobileListingComponent from "./MobileListingComponent";
import TabletListingComponent from "./TabletListingComponent";
import LaptopListingComponent from "./LaptopListingComponent";
import AudioListingComponents from "./AudioListingComponents";
import WatchListingComponents from "./WatchListingComponents";
import { useDispatch, useSelector } from "react-redux";
import { createItemListing } from "../../../api/itemSlice.js";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput,
  CFormTextarea,
  CFormSelect,
} from "@coreui/react";
function NewListingComponent({ ...params }) {
  const seller = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const filters = {
    mobile: "mobile",
    tablet: "tablet",
    laptop: "laptop",
    audio: "audio",
    watch: "watch",
  };
  const [category, setCategory] = useState("");
  const initialValues = {
    title: "",
    image: "",
    listingPrice: "",
    actualPrice: "",
    stock: 0,
    description: "",
  };
  const [items, setItems] = useState(initialValues);
  const [visible, setVisible] = params.var;
  function changeHandler(e) {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }
  const formData = new FormData();
  function createNewListing(e) {
    e.preventDefault();
    for (const item in items) {
      formData.append(item, items[item]);
    }
    formData.append("seller", seller.sellerData.seller._id);
    formData.append("category", category);
    formData.append(
      "discount",
      Math.abs(items.actualPrice - items.listingPrice)
    );
    dispatch(createItemListing(formData));
    // formData.forEach((v, k) => {
    //   console.log(k, v);
    // });
    setItems(initialValues);
    setVisible(!visible);
  }
  return (
    <>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add New Listing</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CFormSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
          >
            <option value="">Category</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
            <option value="audio">Audio</option>
            <option value="watch">Watch</option>
          </CFormSelect>
          <br />
          <CFormInput
            value={items.title}
            onChange={changeHandler}
            name="title"
            type="text"
            label="Title"
            placeholder="Item Title"
            text=""
          />
          <br />
          {category === filters.mobile && (
            <MobileListingComponent vars={[items, setItems]} />
          )}
          {category === filters.laptop && (
            <LaptopListingComponent vars={[items, setItems]} />
          )}
          {category === filters.tablet && (
            <TabletListingComponent vars={[items, setItems]} />
          )}
          {category === filters.audio && (
            <AudioListingComponents vars={[items, setItems]} />
          )}
          {category === filters.watch && (
            <WatchListingComponents vars={[items, setItems]} />
          )}
          <br />
          <CFormInput
            onChange={(e) => setItems({ ...items, image: e.target.files[0] })}
            name="image"
            type="file"
            accept="image/*"
            label="Upload Image"
            text=""
          />
          <br />
          <CFormInput
            value={items.listingPrice}
            onChange={changeHandler}
            name="listingPrice"
            type="number"
            label="Listing Price"
            placeholder="₹"
            text=""
          />
          <br />
          <CFormInput
            value={items.actualPrice}
            onChange={changeHandler}
            name="actualPrice"
            type="number"
            label="Actual Price"
            placeholder="₹"
            text=""
          />
          <br />
          <CFormInput
            type="number"
            label="Stock"
            placeholder="00"
            text=""
            value={items.stock}
            onChange={changeHandler}
            name="stock"
          />
          <br />
          <CFormTextarea
            value={items.description}
            onChange={changeHandler}
            name="description"
            label="Description"
            rows="3"
            text=""
          ></CFormTextarea>
        </CModalBody>

        <CModalFooter>
          <CButton onClick={createNewListing} color="primary">
            Add New Listing
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default NewListingComponent;
