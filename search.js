function searchfunction(){
    var a = document.getElementById("searchtext").value;
    switch(a){
        case 'home':
        case 'Home':
        case 'HOME':
        case 'choose a scientist':
            open("choose.html");
            break;
        case 'indian scientist': 
        case 'scientists in india':
        case 'scientist in india':
        case 'indian scientists': 
        case 'the indian scientists':
        case 'scientists of india': 
        case 'india scientist':
        case 'best scientists of india':
        case 'best scientist of india':
        case 'best scientists in india':
        case 'best scientist in india':
            open("is.html");
            break;
        case 'cat':
        case 'cats':
        case 'billi':
        case 'Cat':
        case 'CAT':
        case 'CATS':
        case 'Cats':
        case 'billiya':
            open("cat.html");
            break;
        case 'dog':
        case 'dogs':
        case 'Dog':
        case 'Dogs':
        case 'DOG':
        case 'DOGS':
        case 'Kutta':
        case 'Kutte':
        case 'kutta':
        case 'kutte':
            open('dog.html');
            break;
        case 'Hindu':
        case 'Hinduism':
        case 'HINDU':
        case 'HINDUISM':
        case 'hindu':
        case 'hinduism':
            open('hindu.html');
            break;
        case 'rammandir':
        case 'ram mandir':
        case 'Rammandir':
        case 'Ram Mandir':
        case 'RAM MANDIR':
        case 'RAMMANDIR':
            open('ram.html');
            break;  
        case 'car':
        case 'Car':
        case 'cars':
        case 'Cars':
        case 'CAR':
        case 'CARS':
            open('car.html');
            break;     
        default:
            open("searchbreak.html");
            console.log("noooo");
            break; 
    }
}