function MyApp(){
    const [cities, setCities] = React.useState([])

    const fetchCities = async ()=>{
        const resp = await fetch('data/cities.json')
        const json = await resp.json()
        setCities(json)
    }

    React.useEffect(()=>{
        fetchCities()
    }, [])

    return <main>
    <section>
        <div className="container">
            <Header />
            <ul>
                {cities.map((el, index) => <CityItem cityData={el} key={index}/>)}
                </ul>
                <Footer />
            </div>
        </section>
    </main>
     
}

function Header(){
    return <h1>CSS Weather Forecast <span><i className="wi wi-sunrise"></i></span></h1>
}

function Footer(){
    return <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
}

function CityItem({cityData}){
    return <li>
            <div>
                <span>{cityData.name}</span>
                <span>{cityData.temp}&deg;C</span>
                <i className={`wi wi-${cityData.icon}`}></i>
            </div>
        </li>

}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);