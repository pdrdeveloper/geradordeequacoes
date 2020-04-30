function calcular() {
    const mtf1 = document.getElementById('mtf1').value // mtf1
    const mtf2 = document.getElementById('mtf2').value // mtf2
    const mtf3 = document.getElementById('mtf3').value // aequation
    const soma = (Number(mtf1) + Number(mtf2)) * -1;
    const produto = Number(mtf1) * Number(mtf2);
    const aviso = document.getElementById('aviso')
    const resultado = document.getElementById('resultado')
    if (mtf3 > 1 && mtf3 < 9999999 || mtf1 < 9999999 && mtf2 < 9999999) {
        if (soma === 0 || produto === 0 || (soma === 0 && produto === 0)) {
            aviso.innerText = `Por favor, preencha as soluções.`;
            resultado.innerText = ``;
            this.setState(r);
        } else if (mtf1 === mtf2) {
            aviso.innerText = `Por favor, digite soluções diferentes.`;
            resultado.innerText = ``;
            this.setState(r);
        } else if (soma > 0 && produto > 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `${mtf3}x²+${soma * mtf3}x+${produto * mtf3}`;
            this.setState(r);
        } else if (soma > 0 && produto < 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `${mtf3}x²+${soma * mtf3}x${produto * mtf3}`;
            this.setState(r);
        } else if (soma < 0 && produto > 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `${mtf3}x²${soma * mtf3}x+${produto * mtf3}`;
            this.setState(r);
        } else {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `${mtf3}x²${soma * mtf3}x${produto * mtf3}`;
            this.setState(r);
        }
    } else if (mtf3 <= 1) {
        if (soma === 0 || produto === 0 || (soma === 0 && produto === 0)) {
            aviso.innerText = `Por favor, preencha as soluções.`;
            resultado.innerText = ``;
            this.setState(r);
        } else if (mtf1 === mtf2) {
            aviso.innerText = `Por favor, digite soluções diferentes.`;
            resultado.innerText = ``;
            this.setState(r);
        } else if (soma > 0 && produto > 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `x²+${soma}x+${produto}`;
            this.setState(r);
        } else if (soma > 0 && produto < 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `x²+${soma}x${produto}`;
            this.setState(r);
        } else if (soma < 0 && produto > 0) {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `x²${soma}x+${produto}`;
            this.setState(r);
        } else {
            aviso.innerText = `A equação gerada com ${mtf1} e ${mtf2} é:`;
            resultado.innerText = `x²${soma}x${produto}`;
            this.setState(r);
        }
    } else {
        aviso.innerText = `MATH ERROR`;
        resultado.innerText = `404`;
    }
}