import React from "react";
import { CFormSelect } from "@coreui/react";

function WatchListingComponents({ vars }) {
  const [items, setItems] = vars;
  function changeHandler(e) {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }
  return (
    <>
      <CFormSelect name="type" value={items.type} onChange={changeHandler}>
        <option>Type</option>
        <option value="Smart Watch">Smart Watch</option>
        <option value="Fitness Band">Fitness Band</option>
      </CFormSelect>
    </>
  );
}

export default WatchListingComponents;
