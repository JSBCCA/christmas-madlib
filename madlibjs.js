$("#button").on('click', function() {
    for (i = 10; i > 0; i--) {
      var x = $("#n"+i).val();
      if (x.length !== 0) {
        $('.n'+i).text(x);
      }};
    for (i = 3; i > 0; i--) {
      var x = $("#a"+i).val();
      if (x.length !== 0) {
        $('.a'+i).text(x);
      }};
    for (i = 6; i > 0; i--) {
      var x = $("#v"+i).val();
      if (x.length !== 0) {
        $('.v'+i).text(x);
      }};
    $('.white').css('visibility', 'visible');
    return false;
});