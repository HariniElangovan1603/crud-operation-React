import './bookmyshow.css';
export default function bookmyshow({ states }) {
     
    const state = [
        {
            id: 1,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai-selected.png",
            title: "Mumbai",
            link: "https://in.bookmyshow.com/explore/home/mumbai"
        },
        {
            id: 2,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
            title: "delhi",
            link: "https://in.bookmyshow.com/explore/home/national-capital-region-ncr"
        },
        {
            id: 3,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
            title: "bengaluru",
            link: "https://in.bookmyshow.com/explore/home/bengaluru"
        },
        {
            id: 4,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
            title: "hyderabad",
            link: "https://in.bookmyshow.com/explore/home/hyderabad"
        },
        {
            id: 5,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
            title: "ahmedabad",
            link: "https://in.bookmyshow.com/explore/home/ahmedabad"
        },
        {
            id: 6,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
            title: "chandigarh",
            link: "https://in.bookmyshow.com/explore/home/chandigarh"
        },
        {
            id: 7,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
            title: "chennai",
            link: "https://in.bookmyshow.com/explore/home/chennai"
        }
        ,
        {
            id: 8,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
            title: "pune",
            link: "https://in.bookmyshow.com/explore/home/pune"
        },
        {
            id: 9,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
            title: "kolkata",
            link: "https://in.bookmyshow.com/explore/home/kolkata"
        },
        {
            id: 10,
            img: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
            title: "kochi",
            link: "https://in.bookmyshow.com/explore/home/kochi"
        }
    ];

    
    return (
        <div>
            
        <p>Popular Cities
         <div className="bookmyshow-container">
            
<h4><input type='search' placeholder='Search your City'/></h4>
            {state.map((items, id) =>
                <div key={items.id}>
               <a href={items.link}><br/>
                        <img src={items.img} alt="" /><br/>
                        <p>{items.title}</p>
                    </a>
                </div>
           )}
         
        </div>
        </p>
        
        
          </div>
         
    )
}