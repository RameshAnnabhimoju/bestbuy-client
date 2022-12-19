import Catalogue from "../../../../assets/Cataloge";
import NewReviewComponent from "./NewReviewComponent";
import ReactStars from "react-stars";

export default function reviews() {
  const items = Catalogue();
  return (
    <>
      <div>
        <h4>Reviews:</h4>
        <NewReviewComponent />
        {items[0].userFeedback.map((data) => {
          return (
            <div key={data.user}>
              <div className="rating">
                <h5>{data.user} :</h5>
                <ReactStars
                  className="rating-stars"
                  value={data.rating}
                  count={5}
                  size={25}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <h6>{data.review}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}
