const btn = document.querySelector('.ipadbtn');
const text = document.getElementById('welcome-msg');

const styles = {
    fontFamily: 'cursive',
    fontStyle: 'italic',
    fontSize: '80px',
    color: '#43a385',
    textAlign: 'center',
    marginTop: '50%',
}

function turnOnScreen () {
    if(document.querySelector('.screen').style.display = 'none') {
        document.querySelector('.screen').style.display = 'block'
        document.getElementById('welcome-msg').innerHTML = 'hello';
        Object.assign(text.style, styles)
    }
};

btn.onclick = turnOnScreen;