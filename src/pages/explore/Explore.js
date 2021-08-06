import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Explore = () => {

  return (
    <Container className="pt-5 _container">
      <div className="search mt-5 pt-5">
        <h1 className="search__title pt-5">
          Near You
        </h1>
          <div className="search__inner">
           <div className="search__block">
            <div className="block__location">
              <label className="block--text code">Search destinations</label>
              {/* <input type="text" className="input--text" 
                value={getLocation} placeholder="Search by City, neighbourhood, etc"
                onChange={(evt) => {
                  setGetLocation(evt.target.value)
                  getPlacePredictions({ input: evt.target.value });
                  console.log(placePredictions);
                  item = []
                  placePredictions.map(sug => {
                    item.push(sug.description)
                  })
                  setPlaceSuggestion(item)
                }}
              /> */}
               {/* <ul class="suggestions ">----------
                {placeSuggestion.map(i=> (
                  <li>{i}</li>
                ))}
              </ul> */}
           
            </div>
            {/* <div className="line"></div>
            <div className="block__query">
              <label className="block--text">Query</label>
              <input type="text" className="input--text" placeholder="Waterfall, Caves, Palaces, etc."/>
            
               <ul class="suggestions"> Suggestion</ul>----------
             
            </div> */}
            <button className="search__btn">
            <BsSearch 
                  // value={{ color: 'blue', size: '1000px' }}
                  color="white"
                  size="25px"
                /> 
              
              </button>
          </div> 
        </div>

      </div>
    </Container>
  );
}
 
export default Explore;