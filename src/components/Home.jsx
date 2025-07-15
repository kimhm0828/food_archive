import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen text-gray-800">
            <div className="max-w-xl mx-auto px-4 mt-8">
                <button
                    onClick={() => navigate('/register')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                    맛집 등록
                </button>
            </div>
        </div>
    );
};

export default Home;
