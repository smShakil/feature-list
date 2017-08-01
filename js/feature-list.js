(function ( $ ) {
 
  $.fn.featureList = function( options ) {
    
    var settings = $.extend({
      
      iconColor: "#404040",
      iconSize: "80px",
      iconPadding: "10px",
      iconBackground: "transparent",
      speed: 5000
    }, options );
    
    $(".featureList .featureIcon").css({
      position: 'absolute',
      fontSize: settings.iconSize,
      color: settings.iconColor,
      background: settings.iconBackground,
      padding: settings.iconPadding,
      borderRadius: '3px',
      cursor: 'pointer',
      transition: 'all ease-out 0.3s'
    })
    
    var hovering = false;
    $(".featureIcon").mouseenter(function(){
      $(this).addClass('activeFeatureIcon');
      $('.featureIcon').not($(this)).removeClass('activeFeatureIcon');

      var index = $('.featureIcon').index($(".activeFeatureIcon"));
      var featureDetails = $('.featureDetails').removeClass("activeDetails");
      featureDetails.eq(index).addClass("activeDetails");

      hovering = !hovering;
    })

    $(".featureIcon").mouseleave(function(){
      hovering = !hovering;
    })

    setInterval(function(){
      if(hovering == false){
        var $activeIcon = $(".activeFeatureIcon").removeClass("activeFeatureIcon");
        var featureIcons = $('.featureIcon');
        var iconIndex = featureIcons.index($activeIcon);
        featureIcons.eq((iconIndex + 1) % featureIcons.length).addClass("activeFeatureIcon");

        var $activeDetails = $(".activeDetails").removeClass("activeDetails");
        var featureDetails = $('.featureDetails');
        var detailIndex = featureDetails.index($activeDetails);
        featureDetails.eq((detailIndex + 1) % featureDetails.length).addClass("activeDetails");

      }
    }, settings.speed)
    
  };
 
}( jQuery ));