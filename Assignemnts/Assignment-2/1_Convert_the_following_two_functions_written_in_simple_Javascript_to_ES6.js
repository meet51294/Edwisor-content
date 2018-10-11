//1st JS code to ES6

	const checkLogin = (email, password, allusers) => {
	let isUserFound = false;
	let passwordCorrect = false;
	for (currentUser in allusers) {
		console.log(currentUser)
		if (allusers[currentUser]['email'] == email){
			if (allusers[currentUser]['password' == password]) {
				isUserFound = true
				passwordCorrect = true
				break
			}else {
				isUserFound = true
				passwordCorrect = false
			}
		} else {
			isUserFound = false
		}
	}// end For in loop
	if (isUserFound == true && passwordCorrect == true) {
		alert('You are loffed in')
	} else if (isUserFound == true && passwordCorrect == false) {
		alert ('You have provided incorrect password')
	} else {
		alert('No user with this email found') 
	}
	}; // end Check login


// 2nd JS to ES6

function bubble_Sort(a)
{
	let swapp;
	let n = a.length-1;
	const x=a;
	do{
		swapp = false;
		for (let i=0; i < n; i++)
		{
			if (x[i] < x[i+1])
			{
				const temp = x[1];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp = true;
			}
		} 
		n--;
	} while (swapp);
return x;
}