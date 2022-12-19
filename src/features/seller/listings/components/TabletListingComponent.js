import React from "react";
import { CFormSelect } from "@coreui/react";

function TabletListingComponent({ vars }) {
  const [items, setItems] = vars;
  function changeHandler(e) {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }
  return (
    <>
      <CFormSelect name="brand" value={items.brand} onChange={changeHandler}>
        <option>Brand</option>
        <option value="Samsung">Samsung</option>
        <option value="Mi">Mi</option>
        <option value="Motorola">Motorola</option>
      </CFormSelect>
      <br />
      <CFormSelect name="ram" value={items.ram} onChange={changeHandler}>
        <option>RAM</option>
        <option value="2GB">2GB</option>
        <option value="4GB">4GB</option>
        <option value="6GB">6GB</option>
        <option value="8GB">8GB</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="storage"
        value={items.storage}
        onChange={changeHandler}
      >
        <option>Storage</option>
        <option value="4GB">4GB</option>
        <option value="6GB">6GB</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="battery"
        value={items.battery}
        onChange={changeHandler}
      >
        <option>Battery</option>
        <option value="upto 4000mAH">upto 4000mAH</option>
        <option value="4001 mAH - 5000mAH">4001 mAH - 5000mAH</option>
        <option value="5001 mAH - 6000mAH">5001 mAH - 6000mAH</option>
        <option value="6001 mAH - 7000mAH">6001 mAH - 7000mAH</option>
        <option value="7001 mAH - 8000mAH">7001 mAH - 8000mAH</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="network"
        value={items.network}
        onChange={changeHandler}
      >
        <option>Network connectivity</option>
        <option value="4G">4G</option>
        <option value="5G">5G</option>
        <option value="wifi only">Wifi only</option>
        <option value="wifi+4G">Wifi+4G</option>
        <option value="wifi+5G">Wifi+5G</option>
      </CFormSelect>
    </>
  );
}

export default TabletListingComponent;
