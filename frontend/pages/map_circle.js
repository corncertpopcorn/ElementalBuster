var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표 (기본값)
        level: 3 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 

   // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(); 

    // 사용자의 현재 위치 얻기
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // 지도 중심을 사용자의 현재 위치로 이동
            map.setCenter(new kakao.maps.LatLng(lat, lng));

            // 반경 1킬로미터 이내의 원을 지도에 표시합니다
            displayCircle(lat, lng, 500);
        }, function() {
            console.error('사용자 위치를 가져올 수 없습니다.');
        });
    } else {
            console.error('Geolocation API를 지원하지 않습니다.');
    }

     // 원을 지도에 표시하는 함수입니다
    function displayCircle(lat, lng, radius) {
        var circle = new kakao.maps.Circle({ 
            center: new kakao.maps.LatLng(lat, lng), // 원의 중심좌표입니다
            radius: radius, // 원의 반지름입니다
            strokeWeight: 1, // 선의 두께입니다
            strokeColor: '#00a0e9', // 선의 색깔입니다
            strokeOpacity: 0.1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid', // 선의 스타일입니다
            fillColor: '#00a0e9', // 채우기 색깔입니다
            fillOpacity: 0.2  // 채우기 불투명도입니다 
        });

        // 원을 지도에 표시합니다
        circle.setMap(map); 

        // 원의 반경 정보를 표시할 커스텀오버레이를 생성합니다
        var radiusOverlay = new kakao.maps.CustomOverlay({
            content: '<div class="info">반경 <span class="number">' + radius + '</span>m</div>', // 표시할 내용입니다
            position: new kakao.maps.LatLng(lat, lng), // 표시할 위치입니다
            xAnchor: 0,
                    yAnchor: 0,
            zIndex: 1 
        });

        // 반경 정보 커스텀 오버레이를 지도에 표시합니다
        radiusOverlay.setMap(map);
   }
