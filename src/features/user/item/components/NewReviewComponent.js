import React, { useState } from "react";
import ReactStars from "react-stars";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
function NewReviewComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Give a review</CButton>

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Give a review</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <h5>Give Rating</h5>
          <ReactStars
            className="rating-stars"
            value={0}
            count={5}
            size={50}
            activeColor="#ffd700"
          />
          <br />

          <h5>Write a review</h5>
          <textarea className="review-input" placeholder="Write a review" />
          <br />
        </CModalBody>

        <CModalFooter>
          <CButton onClick={() => setVisible(false)}>Submit Review</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default NewReviewComponent;
