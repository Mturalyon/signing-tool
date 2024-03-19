import getToken from "../Partials/getToken";

function Home() {

    return (
        <div>
            Home
            <button onClick={getToken}>Click me</button>
        </div>
        
    )
}

export default Home;