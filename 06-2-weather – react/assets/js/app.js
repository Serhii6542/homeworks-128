function MyApp(){
    const [cities, setCities] = React.useState([])

    const featchCities = async () => {
        const resp = await fetch('./data/cities.json')
        const json = await resp.json()
        setCities(json)
    }

    React.useEffect(()=>{
        featchCities()
        return ()=>{
        }
    }, [])

    return <main>
    <div className="container">
        <Header/>
        <ul className="list">
            {cities.map((el, index) => <CitiItem cityDate={el} key={index}/>)}
        </ul>
            <Footer/>
        </div>
    </main>
}


function Header(){
    return <h1>CSS Weather Forecast <i className="wi wi-day-sunny"></i></h1>

}
function Footer(){
    return  <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
}

function CitiItem({cityDate}){
    return <li className={cityDate.width}>
            <div className={`city ${cityDate.color}`}>
                <div className="title">{cityDate.name}</div>
                <div className="temp-icon">
                    {cityDate.temp}&deg;C 
                    <i className = {`wi wi-${cityDate.icon}`}></i>
                </div>
            </div>
        </li>
}

/*<li className="w50">
    <div className="city blue">
        <div className="title">Lisbone</div>
        <div className="temp-icon">
            21&deg;C 
            <i className="wi wi-day-sunny"></i>
        </div>
    </div>
</li>
*/



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);