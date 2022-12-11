function submit() {
    var user = {
        fullname: fullname.value,
        designation: designation.value,
        monthlyIncome: monthlyIncome.value,
        currentBalance: currentBalance.value,
        amountToSave: amountToSave.value,
        username: username.value,
        password: password.value,
        
    };
    console.log(user);
    if (username.value in localStorage) {
        alert('Account is already exist')
    } else {
        localStorage.setItem(username.value, JSON.stringify(user));
        alert('Account created successfully..please login to use the app');
        window.location.href = 'login.html';
    }
}
