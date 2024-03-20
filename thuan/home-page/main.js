const sideMenuHome = document.getElementById('side-menu-homepage');
const showSideMenuHome = document.getElementById('toggle-menu-homepage');
const hideSideMenuHome = document.getElementById('close-menu');

const overlayHome = document.getElementById('overlay-homepage');

showSideMenuHome.onclick = () => {
    sideMenuHome.classList.add('show-side-menu');
    overlayHome.style.display = 'block';
}

hideSideMenuHome.onclick = () => {
    sideMenuHome.classList.remove('show-side-menu');
    overlayHome.style.display = 'none';
}