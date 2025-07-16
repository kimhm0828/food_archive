import { RAITING_ICON } from "../../constants/star.js";
import { DISTANCE } from "../../constants/distance.js";
import { useState } from "react";
import { useRestaurantsDispatch } from "../../contexts/RestaurantContext.jsx";
import Header from "../../layouts/Header.jsx";

const RestaurantForm = (actionTitle, restaurant) => {
  const isRegisterForm = actionTitle.startsWith("등록");

  const [photo, setPhoto] = useState(isRegisterForm ? "" : restaurant.photo);
  const [name, setName] = useState(isRegisterForm ? "" : restaurant.name);
  const [walkingTime, setTime] = useState(
    isRegisterForm ? 1 : restaurant.walkingTime,
  );
  const [rating, setRating] = useState(
    isRegisterForm ? 5 : Number(restaurant.rating),
  );

  const [tag, setTag] = useState(isRegisterForm ? "" : restaurant.tag);

  const dispatch = useRestaurantsDispatch();

  const restaurantActionHandler = () => {
    const newRestaurant = {
      photo,
      name,
      rating,
      walkingTime,
      tag,
    };

    if (!isRegisterForm) {
      newRestaurant.id = restaurant.id;
      dispatch({
        type: "UPDATE",
        updateRestaurant: {
          id: newRestaurant.id,
          photo,
          name,
          rating,
          walkingTime,
          tag,
        },
      });
    } else {
      dispatch({
        type: "ADD",
        newRestaurant: {
          id: self.crypto.randomUUID(),
          photo,
          name,
          rating,
          walkingTime,
          tag,
        },
      });
    }

    // TODO 메인페이지로 이동
    // 확인 모달

    // 등록 수행 / 리다이렉트
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{actionTitle}</h2>
          <div className="space-x-2">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">
              취소
            </button>
            <button
              onClick={restaurantActionHandler}
              className="px-4 py-2 rounded-md bg-blue-500 text-white"
            >
              저장
            </button>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="w-40 h-40 rounded-md bg-gray-200 flex items-center justify-center mr-6">
            <img src={photo} className="w-30 h-30" />
          </div>
          <div>
            <label
              htmlFor="image-upload"
              className="inline-block mb-2 px-3 py-1 text-sm border border-gray-300 rounded-md cursor-pointer"
            >
              변경
            </label>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              multiple
              required
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPhoto(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <p className="text-sm text-gray-500 leading-5">
              ✓ png, jpg, jpeg의 확장자 <br /> ✓ 음식점 사진 or 음식 사진을
              업로드 해주세요!
            </p>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-medium mb-1">음식점</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block font-medium mb-1">별점</label>
          <div className="flex">
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
            >
              <option value={1}>{RAITING_ICON.ONE_STAR}</option>
              <option value={2}>{RAITING_ICON.TWO_STAR}</option>
              <option value={3}>{RAITING_ICON.THREE_STAR}</option>
              <option value={4}>{RAITING_ICON.FOUR_STAR}</option>
              <option value={5}>{RAITING_ICON.FIVE_STAR}</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-medium mb-1">거리</label>
          <div className="flex w-full">
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              list="tickmarks"
              className="w-full accent-blue-600"
              value={walkingTime}
              onChange={(e) => setTime(e.target.value)}
            />
            <datalist id="tickmarks">
              <option value="0" label="건물 내" />
              <option value="1" label="걸어서 5분 거리" />
              <option value="2" label="걸어서 10분 거리" />
              <option value="3" label="10분 초과" />
            </datalist>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{DISTANCE.IN_SAIT}</span>
            <span>{DISTANCE.IN_FIVE_MINUTES}</span>
            <span>{DISTANCE.IN_TEN_MINUTES}</span>
            <span>{DISTANCE.TEN_MINUTES_OVER}</span>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-medium mb-1">태그</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 leading-5">
            ✓ 쉼표(,)로 구분하여 입력해주세요!
          </p>
        </div>
      </div>
    </>
  );
};

export default RestaurantForm;
