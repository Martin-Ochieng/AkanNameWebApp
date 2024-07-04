document.getElementById('akan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;

    if (!birthday || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    const date = new Date(birthday);
    const DD = date.getDate();
    const MM = date.getMonth() + 1; // getMonth() is zero-based
    const YY = date.getFullYear() % 100;
    const CC = Math.floor(date.getFullYear() / 100);




    const dayOfWeek = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);


    console.log(DD);
    console.log(MM);
    console.log(YY);
    console.log(CC);
    console.log("********");
    console.log(date);
    console.log(dayOfWeek);

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName;
    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else if (gender === 'female') {
        akanName = femaleNames[dayOfWeek];
    }

    document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
});
