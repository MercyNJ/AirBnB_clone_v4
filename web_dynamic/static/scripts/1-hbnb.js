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
});
