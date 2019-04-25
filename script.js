let password = document.querySelector('#password');
let strengthBar = document.querySelector('#strength');
let submittedPassword = document.querySelector('#submittedPassword');

password.addEventListener('keyup', () => {
		checkPassword(password.value);
});

function checkPassword(password) {
		let strength = 0;
		
		if (password.match(/[a-z][a-zA]+/)){
				strength += 1
		}
		if (password.match(/[0-9]+/)){
				strength += 1
		}
		if (password.match(/[~<>?!]+/)) {
				strength += 1
		}
		if (password.match(/[@€$%^*()_?+]+/)){
				strength +=1
		}
		if (password.length > 8){
				strength += 1
		}
		
		switch (strength) {
				case 0:
						strengthBar.value = 0;
						break;
				case 1:
						strengthBar.value = 20;
						strengthBar.className = "progress-bar bg-danger";
						strengthBar.innerText = "Weak";
						break;
				case 2:
						strengthBar.value = 40;
						strengthBar.className = "progress-bar bg-warning";
						break;
				case 3:
						strengthBar.value = 60;
						strengthBar.className = "progress-bar bg-info";
						break;
				case 4:
						strengthBar.value = 80;
						strengthBar.className = "progress-bar";
						break;
				case 5:
						strengthBar.value = 100;
						strengthBar.className = "progress-bar bg-success";
						break;
		}
}

function onSubmit(value) {
		if (!value || value.length < 0){
				alert('Enter your password')
		}
		
		submittedPassword.innerText = value;
}

function onReset() {
		password.value = '';
		strengthBar.value = 0;
		submittedPassword.innerHTML = '<p class="text-muted">Your password appears here</p>';
}
