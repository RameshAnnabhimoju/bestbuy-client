import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setFilters } from "../../../api/itemSlice";
import { useDispatch } from "react-redux";
import {
  CForm,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CFormSelect,
} from "@coreui/react";
function FilterCategoryComponent(parms) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const [category, setCategory] = parms.var;
  let filterValue = category;
  useEffect(() => {
    if (items.filters.category !== undefined) {
      filterValue = items.filters.category;
      setCategory(filterValue);
    } else {
      filterValue = setCategory;
    }
  }, [items.filters.category]);
  function setFilterHandler(e) {
    setCategory(e.target.value);
    dispatch(setFilters({ category: e.target.value }));
  }
  return (
    <CForm>
      <CAccordion alwaysOpen activeItemKey={1}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Categories</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormSelect value={filterValue} onChange={setFilterHandler}>
              <option>Select Category</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="laptop">Laptop</option>
              <option value="audio">Audio</option>
              <option value="watch">Watch</option>
            </CFormSelect>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default FilterCategoryComponent;
