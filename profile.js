function showContent(section) {
    let sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(section).style.display = 'block';
}

function confirmSignOut() {
    document.getElementById('signout-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('signout-popup').style.display = 'none';
}

function signOut() {
    window.location.href = 'home.html'; 
}
