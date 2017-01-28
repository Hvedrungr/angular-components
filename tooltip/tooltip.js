app.directive('tooltip', [
  function () {
    var TOOLTIP_OFFSET_TOP = 5;
    var TOOLTIP_DEFAULT_TEXT = 'Hovered';

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var currentTooltip = null;
        attrs.tooltipText = attrs.tooltipText || TOOLTIP_DEFAULT_TEXT;

        element.bind('mouseover', function(e) {
          // Create tooltip element
          var tooltip = document.createElement("div");
          // Add tooltip content
          tooltip.innerHTML = attrs.tooltipText;
          // Add tooltip style
          tooltip.className += ' tooltip';

          // Add tooltip to DOM
          document.body.appendChild(tooltip);
          currentTooltip = tooltip;

          // Add tooltip position
          tooltip.style.top = element[0].offsetTop + element[0].offsetHeight + TOOLTIP_OFFSET_TOP + 'px';
          tooltip.style.left = element[0].offsetLeft + (element[0].offsetWidth / 2) - (tooltip.offsetWidth / 2) + 'px';
          // Finally, add a class for animation purpose
          tooltip.className += ' show';
        });

        element.bind('mouseout', function () {
          if(currentTooltip) {
            document.body.removeChild(currentTooltip);
          }
        });
      }
    };
  }]
);
