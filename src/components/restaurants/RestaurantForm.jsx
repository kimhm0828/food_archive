import { RAITING_ICON } from "../../constants/star.js";
import { DISTANCE } from "../../constants/distance.js";
import { useState } from "react";

const RestaurantForm = (restaurant) => {
  // const isRegisterForm = actionTitle.startsWith("등록");
  // TODO 배포 전 수정
  const actionTitle = "맛집등록";
  const isRegisterForm = true;

  const [photo, setPhoto] = useState(isRegisterForm ? "" : restaurant.photo);
  const [name, setName] = useState(isRegisterForm ? "" : restaurant.name);
  const [walkingTime, setTime] = useState(
    isRegisterForm ? 1 : restaurant.walkingTime,
  );
  const [rating, setRating] = useState(
    isRegisterForm ? RAITING_ICON.FIVE_STAR : restaurant.rating,
  );
  const [tag, setTag] = useState(isRegisterForm ? "" : restaurant.tag);

  const idxTotime = {
    0: DISTANCE.IN_SAIT,
    1: DISTANCE.IN_FIVE_MINUTES,
    2: DISTANCE.TEN_MINUTES_OVER,
  };

  console.log(photo);
  console.log(name);
  console.log(walkingTime);
  console.log(rating);
  console.log(tag);

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{actionTitle}</h2>
          <div className="space-x-2">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">
              취소
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
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
              <option> {RAITING_ICON.ONE_STAR} ️</option>
              <option> {RAITING_ICON.TWO_STAR}️️</option>
              <option> {RAITING_ICON.THREE_STAR}️️</option>
              <option> {RAITING_ICON.FOUR_STAR}️️</option>
              <option> {RAITING_ICON.FIVE_STAR}️️</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-medium mb-1">거리</label>
          <div className="flex w-full">
            <input
              type="range"
              min="0"
              max="2"
              step="1"
              list="tickmarks"
              className="w-full accent-blue-600"
              value={walkingTime}
              onChange={(e) => setTime(e.target.value)}
            />
            <datalist id="tickmarks">
              <option value="0" label="건물 내" />
              <option value="1" label="걸어서 5분 거리" />
              <option value="2" label="10분 초과" />
            </datalist>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>상암IT 타워 내</span>
            <span>걸어서 5분 거리</span>
            <span>10분 초과</span>
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
