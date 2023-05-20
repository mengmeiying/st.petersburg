document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map-container", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.94576038603253, 30.327023798291457],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
        var myPlacemark = new ymaps.Placemark([59.938955, 30.315644], {
          iconContent: 'САНКТ-ПЕТЕРБУРГ',
          balloonContent: 'Столица России',
        }, {
          iconLayout: "default#image",
          iconImageHref: "../img/point.svg",
          iconImageSize: [21, 56],
          iconImageOffset: [0, -76]
        });
        myMap.geoObjects.add(myPlacemark);
    }

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },
    });
})

