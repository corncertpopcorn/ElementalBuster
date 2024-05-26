// 구와 동 데이터
const regions = [
  { name: '강남구', districts: ['개포동', '논현동', '대치동'] },
  { name: '강동구', districts: ['강일동', '고덕동', '천호동'] },
  { name: '강북구', districts: ['미아동', '수유동', '우이동'] },
  { name: '강서구', districts: ['등촌동', '방화동', '화곡동'] },
  { name: '관악구', districts: ['낙성대동', '신림동', '은천동'] },
  { name: '광진구', districts: ['구의동', '자양동', '화양동'] },
  { name: '구로구', districts: ['개봉동', '구로동', '신도림동'] },
  { name: '금천구', districts: ['가산동', '독산동', '시흥동'] },
  { name: '노원구', districts: ['공릉동', '상계동', '월계동'] },
  { name: '도봉구', districts: ['도봉동', '방학동', '쌍문동'] },
  { name: '동대문구', districts: ['답십리동', '장안동', '회기동'] },
  { name: '동작구', districts: ['노량진동', '대방동', '사당동'] },
  { name: '마포구', districts: ['공덕동', '망원동', '합정동'] },
  { name: '서대문구', districts: ['남가좌동', '북가좌동', '충정로동'] },
  { name: '서초구', districts: ['내곡동', '반포동', '양재동'] },
  { name: '성동구', districts: ['마장동', '성수동', '용답동'] },
  { name: '성북구', districts: ['길음동', '동선동', '삼선동'] },
  { name: '송파구', districts: ['가락동', '문정동', '잠실동'] },
  { name: '양천구', districts: ['목동', '신월동', '신정동'] },
  { name: '영등포구', districts: ['당산동', '대림동', '양평동'] },
  { name: '용산구', districts: ['남영동', '용산동', '이촌동'] },
  { name: '은평구', districts: ['녹번동', '대조동', '역촌동'] },
  { name: '종로구', districts: ['관철동', '삼청동', '종로1.2.3.4가동', '종로5.6가동', '창신1동', '창신2동', '창신3동', '숭인1동', '숭인2동'] },
  { name: '중구', districts: ['광희동', '다산동', '명동', '소공동', '신당동', '을지로동'] },
  { name: '중랑구', districts: ['망우동', '면목동', '묵동', '상봉동', '신내동'] }
];

// 구 선택 요소
const selectRegion = document.getElementById('selectRegion');
// 동 선택 요소
const selectDistrict = document.getElementById('selectDistrict');

// 구 선택 요소에 옵션 추가
regions.forEach(region => {
  const option = document.createElement('option');
  option.value = region.name;
  option.textContent = region.name;
  selectRegion.appendChild(option);
});

// 구 선택에 따라 동 선택 요소에 옵션 추가하는 함수
function updateDistricts(selectedRegionName) {
  const selectedRegion = regions.find(region => region.name === selectedRegionName);
  selectDistrict.innerHTML = '';
  selectedRegion.districts.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    selectDistrict.appendChild(option);
  });
}

// 초기 구 선택 상태에 따라 동 선택 옵션 업데이트
updateDistricts(selectRegion.value);

// 구 선택에 따라 동 선택 요소에 옵션 추가
selectRegion.addEventListener('change', () => {
  updateDistricts(selectRegion.value);
});

