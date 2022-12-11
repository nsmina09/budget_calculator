

function submit() {

    userName = username.value;
    password = password.value;
    if (userName in localStorage) {
        userDetails = JSON.parse(localStorage.getItem(userName));
        console.log(userDetails);
        if (userDetails.password == password) {
            alert(`Welcome back ${userDetails.fullname}`);
            localStorage.setItem('currentusername',userDetails.username);
            window.location.href = 'budget.html';
            // htmlData=`<h3>Welcome ${userDetails.fullname}</h3>`
            // user.innerHtml=htmlData;
        }else{
            alert('Password is incorrect...please check your password');
        }
    } else {
        alert('User is not registered!!Please register your name..')
    }

}

//display the name in budget page header---to do later
// user = username.value;
// console.log('user is',user);
// userData = JSON.parse(localStorage.getItem(user))
// console.log('data is',userData);
// user.innerHtml=`Welcome ${userData.fullname}`;
//end of code