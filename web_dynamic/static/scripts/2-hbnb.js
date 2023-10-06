// A Script that listens for checkbox changes.

$(document).ready(function () {
  const selectedAmenities = {};

  function updateAmenitiesTag () {
    const selectedAmenitiesList = Object.values(selectedAmenities);
    $('.amenities h4').text(selectedAmenitiesList.join(', '));
  }

  $('.amenity-checkbox').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    updateAmenitiesTag();
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
