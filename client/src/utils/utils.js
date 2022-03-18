export const getCurrentUser = () => {
    var userData = localStorage.getItem('persist:root');
    if(userData){
        userData = JSON.parse(userData);
        userData.user = JSON.parse(userData.user)

        return userData.user.currentUser
    }
    return null;
}