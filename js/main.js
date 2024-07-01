"use strict";

const body = document.body;
const header = document.querySelector('.header');
const menuBurger = document.querySelector('.header__burger');

// Mobile menu
if (menuBurger) {
  menuBurger.onclick = function () {
    body.classList.toggle('no-scroll');
    menuBurger.classList.toggle('open');
    header.classList.toggle('mobile-menu-opened');

    if (header.classList.contains('mobile-menu-opened')) {

      const menuLinks = document.querySelectorAll('.header-nav li a');

      for (let link of menuLinks) {

        link.addEventListener('click', () => {
          body.classList.remove('no-scroll');
          menuBurger.classList.remove('open');
          header.classList.remove('mobile-menu-opened');
        })
      }
    }
  };
}

// Popup
const popupBacking = document.querySelector('.popup__wrapper');
const unsPopup = document.querySelector('.popup-unsubscription');
const enterPopup = document.querySelector('.enter-popup');
const popupBtnUns = document.querySelector('.popup-unsubscription__btn');
const unsPopupOpen = document.querySelector('.manage-subscriptions');

if (unsPopupOpen) {
unsPopupOpen.onclick = function(evt) {
  evt.preventDefault();
  unsPopup.classList.add('fade-in');
  unsPopup.classList.remove('fade-out');
  popupBacking.style.display = "flex";
};
}

if (popupBtnUns) {
  popupBtnUns.onclick = function() {
    unsPopup.classList.add('fade-out');
    unsPopup.classList.remove('fade-in');
    popupBacking.style.display = "none";
  };
}

if (popupBacking) {
  popupBacking.onclick = function(evt) {
    evt.stopPropagation();
    if (evt.target.classList.contains('popup__wrapper')) {
      unsPopup.classList.add('fade-out');
      unsPopup.classList.remove('fade-in');
      popupBacking.style.display = "none";
    }
  };
}