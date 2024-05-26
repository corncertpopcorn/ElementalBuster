document.addEventListener("DOMContentLoaded", () => {
  alert("돔이 load됐어요!")
  function getToken(){
    return localStorage.getItem('Authorization');
  }

  let initialDislikeInfo;
  
  async function request(id) {

    const token = getToken();
    const detailInfo = await fetch('http://localhost:8080/recommandation/detail?restaurant_id=' + id,
    {
      method: 'GET',
    });

    const dislikeInfo = await fetch('http://localhost:8080/recommandation/dislike', {
      headers: {
          'Authorization': `Bearer ${token ?? '7t0HShTsQEOLbg7hgO9Alqz2hEbAEerUAAAAAQorDKYAAAGPrq9r50A9X5YOsAdz'}`
      }
    });
    const data = await detailInfo.json();
    dislike = await dislikeInfo.json();
    initialDislikeInfo = dislike;

    const { dislike_id, is_disliked } = dislike;

    if (dislike_id === null || is_disliked === 0 ) {
      document.querySelector('.dislike_btn img').src = '/images/dislike_off.png';
    } else if (is_disliked) {
      document.querySelector('.dislike_btn img').src = '/images/dislike_on.png';
    }

    const { 
        location, 
        rating, 
        image_url, 
        formattedAddress: address, 
        documents: reviews, 
        nationalPhoneNumber: phoneNumber,
        reservable
      } = data;
    const name = data.displayName?.text || '';
    const restaurantType = data.primaryTypeDisplayName?.text || '';
    const isOpen = data.regularOpeningHours?.openNow;
    const weekday = data.regularOpeningHours?.weekdayDescriptions;
    const review_count = data.meta?.pageable_count ?? 0;
    const review_first_el = document.querySelector('.title_container .review_count');
    const review_second_el = document.querySelector('#review .review_count');

    if(review_first_el) {
      review_first_el.innerText = review_count;
    }

    if(review_second_el) {
      review_second_el.innerText = review_count;
    }

    if(rating !== undefined) {
      const el = document.querySelector('.title_container .rating');
      el.innerText = rating;
    }

    if(isOpen !== undefined) {
      const el = document.querySelector('.detail_info .hour');

      el.innerText = isOpen ? '영업 중' : '영업 전';
    }

    if(reservable !== undefined) {
      const el = document.querySelector('.detail_info .reservation + span');
      el.innerText = reservable ? '예약 가능' : '예약 불가';
    }

    if (weekday) {
      const el = document.querySelector('.detail_info .weekday');
      el.innerHTML = weekday.join("<br/>");
    }

    if(image_url.length > -1) {
      const idx = Math.floor(Math.random() * (image_url.length - 0 + 1)) + 0;
      const img = image_url[image_url.length ===1 ? 0 : idx];
      document.querySelector('.img_container').style.backgroundImage = `url("${img?.image_url ?? ''}")`;
      document.querySelector('.img_container').style.backgroundPosition = `50% 50%`;
      document.querySelector('.img_container').style.backgroundSize = `cover`;
      document.querySelector('.img_container').style.backgroundRepeat = `no-repeat`;
    }
    if (name) {
      const el = document.querySelector('.title_container h2');
      console.log(name);
      el.innerText = name;
    }

    if (restaurantType) {
      const el = document.querySelector('.title_container .restaurant_type');
      el.innerText = restaurantType;
    }

    if (address) {
      const el = document.querySelector('.detail_info .location + span');
      el.innerText = address;
    }

    if (phoneNumber) {
      const el = document.querySelector('.detail_info .num + span');
      el.innerText = phoneNumber;
    }

    if (reviews && Array.isArray(reviews)) {
      const el = document.querySelector('.review_list');
      let li = '';

      if(reviews.length > 0) {
        for (let i = 0; i < reviews.length; i++) {
          const review = reviews[i];

          if (!([null, ""].includes(review.thumbnail))) {
                li += `<li>
                        <div>
                          <img width="100%" height="auto" src="${review.thumbnail}" alt="${review.title}">
                        </div>
                        <div class="review_container">
                            <strong class="reivew_title">${review.title}</strong>
                            <small class="reivew_content">
                              ${review.contents}
                            </small>
                            <p>
                              <small class="user_name text-dark">${review.blogname}</small>
                              <span>|</span>
                              <small>${review.datetime}</small>
                            </p>
                        </div>
                      </li>`;

                el.innerHTML = li;    
              }
          }
      }
    }

    if (location.latitude && location.longitude) {
      let script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=4cde2cf0f9eeb480631c915d173de8b4&libraries=services,clusterer,drawing&autoload=false';
      document.head.appendChild(script);
  
          // 스크립트 로드 후 실행될 함수
          script.onload = function() {
          //latitude: 37.5736358
          //longitude: 126.9902704
            // 카카오 지도 API 사용 가능한 상태일 때 실행될 코드
            kakao.maps.load(function() {
              let container = document.getElementById('map');
              let options = {
                center: new kakao.maps.LatLng(location.latitude, location.longitude),
                level: 3
              };
    
              let map = new kakao.maps.Map(container, options);
              // 마커가 표시될 위치입니다 
              let markerPosition  = new kakao.maps.LatLng(location.latitude, location.longitude); 
    
              // 마커를 생성합니다
              let marker = new kakao.maps.Marker({
                  position: markerPosition
              });
    
              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);
          });
        };
      }
    }

  request('1497027837');

  document.querySelector('.dislike_btn').addEventListener('click',postDislike);

  async function postDislike(){

    const dislikeInfo = await fetch("http://localhost:8080/recommandation/dislike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: initialDislikeInfo.email,
        is_disliked: initialDislikeInfo.is_disliked !== null && initialDislikeInfo.is_disliked === 1 ? 0 : 1,
      }),
    });
  
    const dislike = await dislikeInfo.json();

    const { is_disliked, result } = dislike;

    initialDislikeInfo.is_disliked = Number(is_disliked);

    if (result === "success" && (Number(is_disliked) === 1)) {
      document.querySelector('.dislike_btn img').src = '/images/dislike_on.png';
    } else {
      document.querySelector('.dislike_btn img').src = '/images/dislike_off.png';
    }
  }

});