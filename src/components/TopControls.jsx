import {useNavigate} from 'react-router-dom';
import RatingFilter from './RatingFilter';
import DistanceFilter from './DistanceFilter';

const TopControls = () => {
    const navigate = useNavigate();

    return (
        <div
            id="top-control"
            className="flex items-center justify-between max-w-xl mx-auto px-4 mt-8 mb-4">
            {/* 왼쪽: 등록 버튼 */}
            <button
                onClick={() => navigate('/register')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                맛집 등록
            </button>

            {/* 오른쪽: 필터 2개 */}
            <div className="flex items-center gap-4">
                <RatingFilter/>
                <DistanceFilter/>
            </div>
        </div>
    );
};

export default TopControls;
