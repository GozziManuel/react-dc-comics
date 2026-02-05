export default function mainSection() {
  const dcList = [
    {
      title1: "DC COMICS",
      links1: [
        {
          text: "Characters",
        },
        {
          text: "Comics",
        },
        {
          text: "Movies",
        },
        {
          text: "TV",
        },
        {
          text: "Games",
        },
        {
          text: "Videos",
        },
        {
          text: "News",
        },
      ],
      title2: "SHOP",
      links2: [
        {
          text: "Shop DC",
        },
        {
          text: "Shop DC Collectibles",
        },
      ],
      title3: "DC",
      links3: [
        {
          text: "Terms Of Use",
        },
        {
          text: "Privacy policy(New)",
        },
        {
          text: "Ad Choices",
        },
        {
          text: "Advertising",
        },
        {
          text: "Jobs",
        },
        {
          text: "Subscription",
        },
        {
          text: "Talent Workshop",
        },
        {
          text: "CPSC Certificates",
        },
        {
          text: "Ratings",
        },
        {
          text: "Shop Help",
        },
        {
          text: "Contact Us",
        },
      ],
      title4: "SITES",
      links4: [
        {
          text: "DC",
        },
        {
          text: "MAD Magazine",
        },
        {
          text: "DC Kids",
        },
        {
          text: "DC Universe",
        },
        {
          text: "DC Power Visa",
        },
      ],
    },
  ];

  return (
    <>
      <div class="listContainer ">
        <div class="container d-flex py-5 sndBackground">
          <div>
            {dcList.map((element) => {
              return (
                <ul class="flexList">
                  <h2 class="mb-2 comicsTitle">{element.title1}</h2>

                  {element.links1.map((testo) => {
                    return <li className="comicsList">{testo.text}</li>;
                  })}
                </ul>
              );
            })}

            {dcList.map((element) => {
              return (
                <ul class="flexList">
                  <h2 class="mb-2 comicsTitle">{element.title2}</h2>

                  {element.links2.map((testo) => {
                    return <li className="comicsList">{testo.text}</li>;
                  })}
                </ul>
              );
            })}
          </div>
          <div>
            {dcList.map((element) => {
              return (
                <ul class="flexList">
                  <h2 class="mb-2 comicsTitle">{element.title3}</h2>

                  {element.links3.map((testo) => {
                    return <li className="comicsList">{testo.text}</li>;
                  })}
                </ul>
              );
            })}
          </div>
          <div>
            {dcList.map((element) => {
              return (
                <ul class="flexList">
                  <h2 class="mb-2 comicsTitle">{element.title4}</h2>

                  {element.links4.map((testo) => {
                    return <li className="comicsList">{testo.text}</li>;
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
