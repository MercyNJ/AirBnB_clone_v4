// A Script that listens for checkbox changes.

$(document).ready(function () {
  const selectedAmenities = {};

  function updateAmenitiesTag () {
    const selectedAmenitiesList = Object.values(selectedAmenities);
    $('.amenities h4').text(selectedAmenitiesList.join(', '));
  }

  $('.amenities li input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    updateAmenitiesTag();
  });

  function apiStatus () {
	  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
		  if (data.status == 'OK') {
			  $('#api_status').addClass('available');
		  } esle {
			  $('#api_status').removeClass('available');
		  }
	  });
  }
  apiStatus();
});
