export default function ComicCard({ thumb, series }) {
  return (
    <div class="col-2 cards">
      <img class="cardImg" src={thumb} alt="thumb" />
      <p class="cardText">{series}</p>
    </div>
  );
}
