function myFirstApp (name,age) {
    prompt("Как тебя зовут?");
    alert ("Привет, меня зовут " + name + "и это моя первая программа!");
   
    function showSkills () {
        let skills = ["html","css","grid","flexbox"];
        for (let i = 0; i < skills.length; i++) {
            showSkills[i] = alert("я владею" + [i]);
            document.write(showSkills);
        }
    }

    showSkills();

    function checkAge () {
        if (age > 18) {
        alert ("Проходи");
        } else 
        alert("Молодой еще");
    }

    function calc(a) {
        console.log(a*=a);
    }
}

myFirstApp("Anton " , 22);