// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  
        
// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 사용자의 현재 위치 얻기
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // 지도 중심을 사용자의 현재 위치로 이동
        map.setCenter(new kakao.maps.LatLng(lat, lng));

        // 반경 1킬로미터 이내의 일식집을 검색합니다
        const options = {
            location: new kakao.maps.LatLng(lat, lng),
            radius: 500
        };
        ps.keywordSearch('일식집', placesSearchCB, options);
            }, () => {
                console.error('사용자 위치를 가져올 수 없습니다.');
            });
        } else {
            console.error('Geolocation API를 지원하지 않습니다.');
    }
		
        
// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 무작위 식당을 선택
        var randomPlace = data[Math.floor(Math.random() * data.length)];
        displayMarker(randomPlace);    
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });

    // 지도 중심을 무작위로 선택된 장소로 이동
    map.setCenter(new kakao.maps.LatLng(place.y, place.x));
    
   // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        var position = this.getPosition();
        var url = 'https://map.kakao.com/?itemId=' + place.id;
        window.open(url, '_blank');
    });
}
    // Place ID를 서버에 저장하는 함수
    function savePlaceId(placeId) {
        fetch('http://localhost:8080/savePlaceId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ placeId: placeId })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }