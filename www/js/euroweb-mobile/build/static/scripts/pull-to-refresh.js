;(function () {

  var startY = 0;
  var distanceY = 0;
  var rootNode = document.documentElement;
  var loader = createLoaderObj()
  var Android = window.Android || {
    tryAgain: function () {
      location.reload();
    },
  };

  if (rootNode) {
    document.body.appendChild(loader.root);
    // capture phase is required!
    rootNode.addEventListener('touchstart', handleTouchStart, true);
    rootNode.addEventListener('touchend', handleTouchEnd, true);
    rootNode.addEventListener('touchcancel', handleTouchCancel, true);
  }

  function createLoaderObj () {
    var loader = document.createElement('div');
    loader.insertAdjacentHTML('beforeend', (
      '<svg viewBox="0 0 40 40" style="width:100%;height:100%;">' +
      '<circle stroke="#4285f4" stroke-width="2.5" fill="none" cx="20" cy="20" r="8.5"></circle>' +
      '<path fill="#4285f4" d="M23.5,19l5,5l5-5H23.5z"></path>' +
      '</svg>'
    ));
    applyStyles(loader, {
      'position': 'absolute',
      'top': '0',
      'left': '50%',
      'margin-left': '-18px',
      'width': '36px',
      'height': '36px',
      'border-radius': '50%',
      'background-color': '#ffffff',
      'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.25), 0 2px 2px 0 rgba(0, 0, 0, 0.15)',
      'transform': 'translate3d(0, -40px, 0)',
      'z-index': '1000'
    });
    return {
      root: loader,
      svg: loader.querySelector('svg'),
      circle: loader.querySelector('circle'),
      path: loader.querySelector('path')
    }
  }

  function getEventPath (event) {
    var path = event.path;
    if (!path && event.composedPath === 'function') {
      path = event.composedPath();
    }
    if (!path) {
      var target = event.target;
      path = [];
      while (target) {
        path.push(target);
        target = target.parentNode;
      }
      path.push(window);
    }
    return path;
  }

  function getParentWithScroll (event) {
    var path = getEventPath(event);
    for (var i = 0, l = path.length; i < l; i++) {
      var node = path[i];
      if (node.nodeType === 1) {
        var css = window.getComputedStyle(node);
        var hasScroll = css.overflowY === 'scroll' || css.overflowY === 'auto';
        if (hasScroll && node.scrollTop > 0) {
          return node;
        }
      }
    }
    return null;
  }

  function isAllowedPTREvent (e) {
    var touch = e.changedTouches[0];
    if (touch.pageY <= window.innerHeight / 7) { // top part of screen
      return !getParentWithScroll(e);
    }
  }

  function animateMove (distance, smooth) {
    var sizeY = loader.root.clientHeight;
    var progress = distance / (window.innerHeight * 0.65);
    var top = distance / 3;
    var R = Math.PI * 11 * 2;
    var maxAtan = Math.atan(progress * 0.9);
    applyStyles(loader.root, {
      'transform': 'translate3d(0, ' + (top - sizeY - 4) + 'px, 0)',
      'transition': smooth ? 'transform .15s' : ''
    });
    applyStyles(loader.svg, {
      'transform': 'rotate(' + (540 * progress) + 'deg)',
      'opacity': progress
    });
    applyStyles(loader.circle, {
      'stroke-dasharray': (R * maxAtan) + ',' + (R * (1 - maxAtan)),
      'stroke-dashoffset': -R * (1 - maxAtan)
    }, false);
    applyStyles(loader.path, {
      'transform': 'scale(' + (progress < 1 ? progress : 1) + ')',
      'transform-origin': '50% 0% 0px'
    });
  }

  function animateRefresh () {
    var sizeY = loader.root.clientHeight;
    var scale = Math.max(window.innerWidth, window.innerHeight) / sizeY * 2;
    applyStyles(loader.root, {
      'transform': 'scale(' + scale + ') translate3d(0, 35%, 0)',
      'transition': 'transform 0.5s'
    });
    applyStyles(loader.svg, {
      'opacity': 0
    });
  }

  function reloadPage () {
    setTimeout(function () {
      Android.tryAgain();
    }, 250)
  }

  function handleTouchStart (e) {
    if (isAllowedPTREvent(e)) {
      var touch = e.changedTouches[0];
      startY = touch.pageY;
      rootNode.addEventListener('touchmove', handleTouchMove, true);
    }
  }

  function handleTouchEnd () {
    if (distanceY >= (window.innerHeight * 0.65)) {
      reloadPage();
      animateRefresh();
    } else {
      animateMove(0, true);
    }
    rootNode.removeEventListener('touchmove', handleTouchMove, true);
  }

  function handleTouchCancel () {
    animateMove(0, true);
    rootNode.removeEventListener('touchmove', handleTouchMove, true);
  }

  function handleTouchMove (e) {
    e.preventDefault();
    var touch = e.changedTouches[0];
    distanceY = touch.pageY - startY;
    animateMove(distanceY);
  }

  function applyStyles (node, styleObj) {
    for (var key in styleObj) {
      if (styleObj.hasOwnProperty(key)) {
        node.style[getCSSSProp(key)] = styleObj[key];
      }
    }
  }

  function getCSSSProp (prop) {
    if (rootNode.style[prop] === undefined) {
      var cache = getCSSSProp.cache || {};
      if (cache[prop]) {
        return cache[prop];
      }
      var prefixes = ['-webkit-', '-moz-', '-ms-', '-o-'];
      for (var i = 0, l = prefixes.length; i < l; i++) {
        if (rootNode.style[prefixes[i] + prop] !== undefined) {
          cache[prop] = prefixes[i] + prop;
          getCSSSProp.cache = cache;
          return cache[prop];
        }
      }
    }
    return prop;
  }

})();