function switchToEditProfile() {
    if(document.getElementById('btn-edit').innerText === 'Edit your profile')
    {
        document.getElementById('profile_edit').setAttribute('class', 'card-body');
        document.getElementById('profile_display').setAttribute('class', 'card-body-hide');
        document.getElementById('btn-edit').innerText = "Finish";
    }
    else {
        window.location.href = window.location.href;
    }
}