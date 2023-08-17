import React from 'react';

const NavbarComponent = () => {
  return ( 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">       
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Menú
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menú</a></li>
    <li><a class="dropdown-item" href="#">Tienda</a></li>
    <li><a class="dropdown-item" href="#">Redes sociales y contactos</a></li>
  </ul>
</li>
</div>
</nav>
);
};

export default NavbarComponent;