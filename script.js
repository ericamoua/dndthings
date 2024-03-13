{ 
//Becuase I do this, then I do this
//Global functions + variables
//+10 is positive
//-10 is negative
function findModifier(stats) {
    if (stats > 11){
        var temp = stats - 10
        return Math.trunc(temp / 2)
    }
    if (stats < 10){
        var temp = stats - 10
        return Math.floor(temp / 2)
    }
    return 0
} 

var randomNumber = Math.floor(Math.random() * 20) + 1;

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the values of first name and last name from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var health = document.getElementById("health").value;
    var dexterity = document.getElementById("dexterity").value;
    var wisdom = document.getElementById("wisdom").value;
    var charisma = document.getElementById("charisma").value;
    var intelligence = document.getElementById("intelligence").value;
    var strength = document.getElementById("strength").value;
    var constitution = document.getElementById("constitution").value;
    var armor = document.getElementById("armor").value;

    //+10 is positive
    //-10 is negative
    function findModifier(stats) {
        if (stats > 11){
            var temp = stats - 10
            return Math.trunc(temp / 2)
        }
        if (stats < 10){
            var temp = stats - 10
            return Math.floor(temp / 2)
        }
        return 0
    } 
    
    var randomNumber = Math.floor(Math.random() * 20) + 1;

    console.log("my dice roll is: " + randomNumber);

    // Log the values to the console
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);

    console.log("Health: " + health + " with modifier: " + findModifier(health));
    console.log("My strength check is : " + (findModifier(health) + randomNumber));

    console.log("Dexterity: " + dexterity + " with modifier: " + findModifier(dexterity));
    console.log("My strength check is : " + (findModifier(dexterity) + randomNumber));

    console.log("Wisdom: " + wisdom + " with modifier: " + findModifier(wisdom));
    console.log("My strength check is : " + (findModifier(wisdom) + randomNumber));

    console.log("Charisma: " + charisma + " with modifier: " + (findModifier(charisma)));
    console.log("My strength check is : " + (findModifier(charisma) + randomNumber));

    console.log("Intelligence: " + intelligence + " with modifier: " + (findModifier(intelligence)));
    console.log("My strength check is : " + (findModifier(intelligence) + randomNumber));

    console.log("Strength: " + strength + " with modifier: " + findModifier(strength));
    console.log("My strength check is : " + (findModifier(strength) + randomNumber));

    console.log("Constitution: " + constitution + " with modifier: " + (findModifier(constitution)));
    console.log("My strength check is : " + (findModifier(constitution) + randomNumber));

    console.log("Armor: " + armor + " with modifier: " + (findModifier(armor)));
    console.log("My strength check is : " + (findModifier(armor) + randomNumber));

    //sumbit button
    /*document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    });*/


});

document.getElementById("submitName").addEventListener("click", function(event) {
    //event.preventDefault();
    console.log("Submit Name button clicked");
    var firstName = document.getElementById("firstName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lastName").value;
    console.log("Last Name: " + lastName);
    console.log(firstName + lastName);
    var fullName = firstName + " " + lastName;
    document.getElementById("output").textContent = fullName;
});

document.getElementById("submitHealth").addEventListener("click", function(event) {
    event.preventDefault();
    var health = document.getElementById("health").value;
    console.log("Health: " + health);
    var healthName = health
    document.getElementById("output").textContent = healthName;
});

document.getElementById("submitCharisma").addEventListener("click", function(event) {
    event.preventDefault();
    var charisma = document.getElementById("charisma").value;
    console.log("Charisma: " + charisma);
    var charismaRoll = findModifier(charisma) + randomNumber;
    console.log(randomNumber);
    document.getElementById("output").textContent = charismaRoll;
});

document.getElementById("submitDexterity").addEventListener("click", function(event) {
    event.preventDefault();
    var dexterity = document.getElementById("dexterity").value;
    console.log("Dexterity: " + dexterity);
    var dexterityRoll = findModifier(dexterity) + randomNumber;
    console.log(randomNumber);
    document.getElementById("output").textContent = dexterityRoll;
});

document.getElementById("submitStrength").addEventListener("click", function(event) {
    event.preventDefault();
    var strength = document.getElementById("strength").value;
    console.log("Strength: " + strength);
    var strengthRoll = findModifier(strength) + randomNumber;
    console.log(randomNumber);
    document.getElementById("output").textContent = strengthRoll;
});

document.getElementById("submitConstituion").addEventListener("click", function(event) {
    event.preventDefault();
    var constitution = document.getElementById("constitution").value;
    console.log("Constitution: " + constitution);
    var constitutionRoll = findModifier(constitution) + randomNumber;
    console.log(randomNumber);
    document.getElementById("output").textContent = constitutionRoll;
});

document.getElementById("submitIntelligence").addEventListener("click", function(event) {
    event.preventDefault();
    var intelligence = document.getElementById("intelligence").value;
    console.log("Intelligence: " + intelligence);
    var intelligenceRoll = findModifier(intelligence) + randomNumber;
    console.log(randomNumber);
    document.getElementById("output").textContent = intelligenceRoll;
});


document.getElementById("submitWisdom").addEventListener("click", function(event) {
    event.preventDefault();
    var wisdom = document.getElementById("wisdom").value;
    console.log("Wisdom: " + wisdom);
    var wisdomRoll = wisdom;
    document.getElementById("output").textContent = wisdomRoll;
});

document.getElementById("submitArmor").addEventListener("click", function(event) {
    event.preventDefault();
    var armor = document.getElementById("armor").value;
    console.log("Armor: " + armor);
    var armorRoll = armor;
    document.getElementById("output").textContent = armorRoll;
});
}