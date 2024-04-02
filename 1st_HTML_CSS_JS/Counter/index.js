//DOM 선택하기
const number2 = document.getElementById("number");
const increase2 = document.getElementById("increase");
const decrease2 = document.getElementById("decrease");

//버튼 클릭 이벤트 설정하기
/*console.log(number2);
console.log(increase2);
console.log(decrease2);*/

/*내용 콘솔창에 띄우기
console.log(number.innerText); // 내용
console.log(increase.offsetTop); // top 위치
console.log(decrease.id); // id */

increase2.onclick = () => {
    const current = parseInt(number.innerText);
    number.innerText = current + 1;
    console.log("increase 가 클릭됨");
}

decrease2.onclick = () => {
    const current = parseInt(number.innerText);
    number.innerText = current - 1;
    console.log("decrease 가 클릭됨");
}
