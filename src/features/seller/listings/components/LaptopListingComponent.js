import React from "react";
import { CFormSelect } from "@coreui/react";
function LaptopListingComponent({ vars }) {
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
        <option value="HP">HP</option>
        <option value="Asus">ASUS</option>
        <option value="Dell">DELL</option>
        <option value="Acer">Acer</option>
        <option value="Lenovo">Lenovo</option>
      </CFormSelect>
      <br />
      <CFormSelect name="ram" value={items.ram} onChange={changeHandler}>
        <option>RAM</option>
        <option value="4GB">4GB</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="storage"
        value={items.storage}
        onChange={changeHandler}
      >
        <option>Storage Capacity</option>
        <option value="200GB">200GB</option>
        <option value="256GB">256GB</option>
        <option value="500GB">64GB</option>
        <option value="512GB">512GB</option>
        <option value="1TB">1TB</option>
      </CFormSelect>
      <br />
      <CFormSelect name="os" value={items.os} onChange={changeHandler}>
        <option>Operating System</option>
        <option value="windows 8">Windows 8</option>
        <option value="windows 10">Windows 10</option>
        <option value="windows 11">Windows 11</option>
        <option value="mac os">Mac OS</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="graphics"
        value={items.graphics}
        onChange={changeHandler}
      >
        <option>Graphics Card</option>
        <option value="nvidia geforce gtx">NVIDIA GeForce GTX</option>
        <option value="nvidia geforce rtx">NVIDIA GeForce RTX</option>
        <option value="amd radeon">AMD Radeon</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="processor"
        value={items.processor}
        onChange={changeHandler}
      >
        <option>Processor</option>
        <option value="intel i3">Intel i3</option>
        <option value="intel i5">Intel i5</option>
        <option value="intel i7">Intel i7</option>
        <option value="AMD Ryzen 3">AMD Ryzen 3</option>
        <option value="AMD Ryzen 5">AMD Ryzen 5</option>
        <option value="AMD Ryzen 7">AMD Ryzen 7</option>
        <option value="AMD Ryzen 9">AMD Ryzen 9</option>
      </CFormSelect>
    </>
  );
}

export default LaptopListingComponent;
