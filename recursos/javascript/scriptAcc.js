const tarjetaLogin = document.querySelector('.tarjeta1');
const tarjetaRegistro = document.querySelector('.tarjeta2');

function activarTarjeta(tarjeta) {
    const otra = tarjeta === tarjetaLogin ? tarjetaRegistro : tarjetaLogin;
    tarjeta.classList.add('activa');
    tarjeta.classList.remove('inactiva');
    otra.classList.add('inactiva');
    otra.classList.remove('activa');
}

tarjetaLogin.addEventListener('click', () => activarTarjeta(tarjetaLogin));
tarjetaRegistro.addEventListener('click', () => activarTarjeta(tarjetaRegistro));
