import ComicCard from "./comicCard";

export default function comicsList({ comics }) {
  return (
    <>
      <div class="jumbotron"></div>
      <div className="myContainer">
        <div class="container">
          <button class="currentbutton btn btn-primary px-5 fw-bold">
            CURRENT SERIES
          </button>

          <div class="row justify-content-center">
            {comics.map((element) => (
              <ComicCard
                key={element.id}
                thumb={element.thumb}
                series={element.series}
              />
            ))}
            <button class="loadbutton btn btn-primary mt-5">LOAD MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}
