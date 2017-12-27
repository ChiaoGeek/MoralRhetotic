var dateSelection = function (id, jQuery, pickmeup) {
  // var pickmeup = pickmeup
    // console.log(id)
    pickmeup(id, {
      flat : true,
      mode : 'range'
    });
    // jQuery(id).pickmeup_uikit();
}
export default dateSelection
