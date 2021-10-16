const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};

function isScrolledIntoView(el) {
  const elemBottom = el.getBoundingClientRect().bottom;
  return elemBottom > 0 ? elemBottom : 0;
}


const menuBody = document.querySelector('.menu__body');
const menuSubBody = document.querySelector('.menu__sub-body');
const menuBlock = document.querySelector('.menu')
const menuHeight = menuBlock.getBoundingClientRect().height;
const burgerIcon = document.querySelector('.menu__icon');
const menuSubHeader = document.querySelector('.menu__sub-header');

if (isMobile.any()) {
  document.body.classList.add('_touch');

  const menuArrows = document.querySelectorAll('.menu__link_arr');
  if (menuArrows.length) {
    menuArrows.forEach(menuArrow => {
      menuArrow.addEventListener('click', (e) => {
        e.preventDefault();
        menuArrow.parentElement.classList.toggle('_active');

        const saleBlock = document.querySelector('.sale');
        const saleBlockHeight = isScrolledIntoView(saleBlock);
        if(saleBlockHeight) {
          menuSubHeader.style.top = `${saleBlockHeight}px`;
          menuSubBody.style.height = `calc(100vh - ${saleBlockHeight}px)`;
        }
        else{
          menuSubHeader.style.top = `0px`;
          menuSubBody.style.height = '100vh';
        }
        if (menuArrow.parentElement.classList.contains('_active')) {
          menuBody.style.overflow = 'visible';
        } else {
          menuBody.style.overflow = 'auto';
        }
      })
    })
  }

  if (burgerIcon.style.display !== 'none') {
    burgerIcon.addEventListener('click', (e) => {
      const saleBlock = document.querySelector('.sale');
      const saleBlockHeight = isScrolledIntoView(saleBlock);

      menuBody.style.height = `calc(100vh - ${(menuHeight + saleBlockHeight)}px)`;

      burgerIcon.parentElement.classList.toggle('_active');
      document.body.classList.toggle('_lock');
    })
  }

  const subMenuBackIcon = document.querySelector('.sub-menu__back');
  if (subMenuBackIcon) {
    subMenuBackIcon.addEventListener('click', (e) => {
      subMenuBackIcon.parentElement.parentElement.parentElement.parentElement.classList.remove('_active');
    })
  }

} else {
  document.body.classList.add('_pc')
}