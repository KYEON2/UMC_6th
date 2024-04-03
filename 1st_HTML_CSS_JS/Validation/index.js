//이름 -> 올바르게 입력했을 때 문구 바뀌는거랑, 색깔 다르게 출력하는 것 부족
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.querySelector('.name');
    const enterButton = document.querySelector('.enter');
    const errorOutput = document.getElementById('out_text');

    // 버튼 클릭 이벤트 리스너 추가
    enterButton.addEventListener('click', function(event) {
        
        const value = textInput.value; // 현재 입력 필드의 값을 가져옴
        const isText = /^[a-zA-Z가-힣]+$/.test(value);

        if(value.length === 0) {
            errorOutput.textContent = '필수 입력 항목입니다'; // 입력값이 없을 때 메시지 출력
        } else if (!isText) {
            errorOutput.textContent = '필수 입력 항목입니다'; // 잘못된 형식의 입력에 대한 메시지
        } else {
            errorOutput.textContent = '멋진 이름이네요!'; // 올바른 입력에 대한 메시지
        }
    });

    // 입력 필드 이벤트 리스너는 유지하되, 버튼을 눌렀을 때의 검증 로직을 분리
    textInput.addEventListener('input', function() {
        enterButton.disabled = false; // 사용자가 입력을 시작하면 버튼을 활성화
        errorOutput.textContent = ''; // 입력이 시작되면 오류 메시지를 초기화
    });

    // 초기 페이지 로드 시 버튼을 비활성화 상태로 설정
    enterButton.disabled = true;
});


//이메일 -> 색깔 다르게 출력하는 것 부족
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email');
    const enterButton = document.querySelector('.enter');
    const errorOutput = document.getElementById('out_email');

    // 이메일 유효성 검사 함수
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사
        return emailPattern.test(email);
    }

    emailInput.addEventListener('input', function() {
        // 입력할 때마다 버튼 활성화 상태를 결정
        enterButton.disabled = false;
    });

    // 버튼 클릭 이벤트 리스너
    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // 폼 제출을 방지
        const value = emailInput.value; // emailInput의 값에 접근

        if(value.length === 0) {
            errorOutput.textContent = '이메일을 입력해주세요!';
            enterButton.disabled = true; // 버튼 비활성화
        } else if (!validateEmail(value)) {
            errorOutput.textContent = '올바른 이메일 형식이 아닙니다!';
            enterButton.disabled = true; // 버튼 비활성화
        } else {
            errorOutput.textContent = '올바른 이메일 형식입니다!';
        }
    });

    // 초기 페이지 로드 시 버튼을 비활성화 상태로 설정
    enterButton.disabled = true;
});



//나이
document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.querySelector('.age');
    const enterButton = document.querySelector('.enter');
    const errorOutput = document.getElementById('out_age');

    // 사용자가 나이 입력을 시작하면 버튼을 활성화
    ageInput.addEventListener('input', function() {
        enterButton.disabled = false; // 버튼 활성화
    });

    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // 폼 제출을 방지
        const value = ageInput.value.trim();
        const isNumber = !isNaN(parseFloat(value)) && isFinite(value) && Number.isInteger(parseFloat(value));

        // 입력값 검사
        if(value.length === 0) {
            errorOutput.textContent = '나이를 입력해주세요!';
        } else if (!isNumber) {
            errorOutput.textContent = '나이는 숫자 형식이여야 합니다!';
        } else if (parseFloat(value) < 0) {
            errorOutput.textContent = '나이는 음수가 될 수 없습니다!';
        } else if (parseFloat(value) !== parseInt(value)) {
            errorOutput.textContent = '나이는 소수가 될 수 없습니다!';
        } else if (parseInt(value) < 19) {
            errorOutput.textContent = '미성년자는 가입할 수 없습니다!';
        } else {
            errorOutput.textContent = '올바른 나이 형식입니다!'; // 모든 조건이 통과되면 메시지 초기화
        }
    });

    // 초기 페이지 로드 시 버튼을 비활성화 상태로 설정
    enterButton.disabled = true;
});

//비밀번호
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('.password');
    const enterButton = document.querySelector('.enter');
    const errorOutput = document.getElementById('out_pass'); 

    // 사용자가 나이 입력을 시작하면 버튼을 활성화
    passwordInput.addEventListener('input', function() {
        enterButton.disabled = false; // 버튼 활성화
    });

    enterButton.addEventListener('click', function(event) {
        const value = passwordInput.value;
        const minLength = 4;
        const maxLength = 12;
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/; // 영문, 숫자, 특수문자 포함

        // 비밀번호 길이 검사
        if(value.length > 0 && value.length < minLength) {
            errorOutput.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        } else if (value.length > maxLength) {
            errorOutput.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        } else if (!passwordPattern.test(value)) {
            errorOutput.textContent = '영어, 숫자, 특수문자를 모두 사용해야 합니다.';
        } else {
            errorOutput.textContent = '올바른 비밀번호입니다!'; // 조건에 맞는 경우 메시지 초기화
        }
    });

    // 초기 페이지 로드 시 버튼을 비활성화 상태로 설정
    enterButton.disabled = true;
});

//비밀번호 확인 아직 성공 메세지 부족
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('.password');
    const rePasswordInput = document.querySelector('.re_password');
    const enterButton = document.querySelector('.enter');
    const errorOutput = document.getElementById('out_repass');

    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // 폼 제출 방지
        const password = passwordInput.value;
        const rePassword = rePasswordInput.value;

        // 비밀번호와 비밀번호 확인 입력값 비교
        if(password !== rePassword) {
            errorOutput.textContent = '비밀번호가 일치하지 않습니다';
        } else if (!password || !rePassword) {
            // 비어 있는 입력값 처리
            errorOutput.textContent = '비밀번호를 입력해주세요';
        } else {
            // 비밀번호 일치 및 입력값이 있는 경우
            errorOutput.textContent = '비밀번호가 일치합니다';
        }
    });

    // 입력 필드에 입력이 시작되면 오류 메시지 초기화
    [passwordInput, rePasswordInput].forEach(input => {
        input.addEventListener('input', function() {
            errorOutput.textContent = ''; // 오류 메시지 초기화
            enterButton.disabled = false; // 버튼 활성화
        });
    });

    // 초기 페이지 로드 시 버튼을 비활성화 상태로 설정
    enterButton.disabled = true;
});
