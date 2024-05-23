import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-32 text-center">
            <h4 className="text-4xl">Oops!</h4>
            <p className="text-2xl text-warning mt-2 mb-2">Do not found the page!</p>
            <Link to="/"><button className="btn btn-info">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;