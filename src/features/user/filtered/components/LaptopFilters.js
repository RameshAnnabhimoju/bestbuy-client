import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsByfilter } from "../../../api/itemSlice";
import {
  CForm,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CFormCheck,
} from "@coreui/react";
function LaptopFilters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const laptopFiltersInitialValues = {
    brands: [],
    ram: [],
    storage: [],
    os: [],
    graphics: [],
    processor: [],
  };
  const [laptopFiltersValues, setLaptopFiltersValues] = useState(
    laptopFiltersInitialValues
  );
  function changeHandler(e) {
    const { name, title, checked } = e.target;
    if (checked) {
      setLaptopFiltersValues({
        ...laptopFiltersValues,
        [name]: [...laptopFiltersValues[name], title],
      });
    } else {
      setLaptopFiltersValues({
        ...laptopFiltersValues,
        [name]: laptopFiltersValues[name].filter((data) => data !== title),
      });
    }
  }
  // useEffect(() => {
  //   const query = new URLSearchParams({
  //     ...items.filters,
  //     ...laptopFiltersValues,
  //   }).toString();
  //   dispatch(fetchItemsByfilter(query));
  // }, [laptopFiltersValues]);
  return (
    <CForm>
      <CAccordion alwaysOpen>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Brands</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Samsung"
              name="brand"
              title="Samsung"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Mi"
              name="brand"
              title="Mi"
              onChange={changeHandler}
            />
            <CFormCheck
              label="HP"
              name="brand"
              title="HP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="ASUS"
              name="brand"
              title="ASUS"
              onChange={changeHandler}
            />
            <CFormCheck
              label="DELL"
              name="brand"
              title="DELL"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Acer"
              name="brand"
              title="Acer"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Lenovo"
              name="brand"
              title="Lenovo"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>RAM</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="4GB"
              name="ram"
              title="4GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="8GB"
              name="ram"
              title="8GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="16GB"
              name="ram"
              title="16GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="32GB"
              name="ram"
              title="32GB"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Storage Capacity</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="200GB"
              name="storage"
              title="200GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="256GB"
              name="storage"
              title="256GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="500GB"
              name="storage"
              title="500GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="512GB"
              name="storage"
              title="512GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="1TB"
              name="storage"
              title="1TB"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>Operating System</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Windows 8"
              name="os"
              title="Windows 8"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Windows 10"
              name="os"
              title="Windows 10"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Windows 11"
              name="os"
              title="Windows 11"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Mac OS"
              name="os"
              title="Mac OS"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={5}>
          <CAccordionHeader>Graphics Card</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="NVIDIA GeForce GTX"
              name="graphics"
              title="NVIDIA GeForce GTX"
              onChange={changeHandler}
            />
            <CFormCheck
              label="NVIDIA GeForce RTX"
              name="graphics"
              title="NVIDIA GeForce RTX"
              onChange={changeHandler}
            />
            <CFormCheck
              label="AMD Radeon"
              name="graphics"
              title="AMD Radeon"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={6}>
          <CAccordionHeader>Processor</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Intel i3"
              name="processor"
              title="Intel i3"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Intel i5"
              name="processor"
              title="Intel i5"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Intel i7"
              name="processor"
              title="Intel i7"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Intel i9"
              name="processor"
              title="Intel i9"
              onChange={changeHandler}
            />
            <CFormCheck
              label="AMD Ryzen 3"
              name="processor"
              title="AMD Ryzen 3"
              onChange={changeHandler}
            />
            <CFormCheck
              label="AMD Ryzen 5"
              name="processor"
              title="AMD Ryzen 5"
              onChange={changeHandler}
            />
            <CFormCheck
              label="AMD Ryzen 7"
              name="processor"
              title="AMD Ryzen 7"
              onChange={changeHandler}
            />
            <CFormCheck
              label="AMD Ryzen 9"
              name="processor"
              title="AMD Ryzen 9"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default LaptopFilters;
