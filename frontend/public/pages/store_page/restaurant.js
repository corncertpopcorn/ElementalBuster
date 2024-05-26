// restaurant_data.js

// 맛집 데이터
const restaurants = {
  "서울특별시 강남구": ["맛집1", "맛집2", "맛집3"],
  "서울특별시 강동구": ["맛집A", "맛집B", "맛집C"],
  // 다른 지역과 맛집 데이터 추가
};

/// 선택한 지역의 맛집 랜덤 추천 함수
function getRandomRestaurant(selectedRegion) {
  const restaurantList = restaurants[selectedRegion];
  if (!restaurantList || restaurantList.length === 0) {
    return "해당 지역의 맛집 정보가 없습니다.";
  }
  const randomIndex = Math.floor(Math.random() * restaurantList.length);
  return restaurantList[randomIndex];
}
