const collection=[
    {
        artist:'Mr Gasmask',
        title: "Acid Attack",
        link: "https://www.youtube.com/watch?v=CscbxxFNAqc&ab_channel=Essencis",
        genre: 'Acid Core'
    },
    {
        artist:'Mr Gasmask',
        title:"Distorted Drum Disciples",
        link: "https://www.youtube.com/watch?v=St2qdwlEbkw&list=RDCscbxxFNAqc&index=4&ab_channel=P4Kid3RM",
        genre: "Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Chiaroscuro",
        link:"https://www.youtube.com/watch?v=cBvlNq0GbHE&ab_channel=voe16",
        genre: "Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title: "Vonk",
        link:"https://www.youtube.com/watch?v=uR2WV-yBZKQ&ab_channel=mrgasmask303",
        genre:"Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Geisterkranke",
        link:"https://www.youtube.com/watch?v=IBtdR7Hadi8&ab_channel=ZwoarnAcide",
        genre:'Acid Core'
    },
    {
        artist:"Mr Gasmask & Acidolido",
        title:"Flesh Vessel",
        link: "https://www.youtube.com/watch?v=O3UQa8y855c&ab_channel=EnfantsSagesproduction",
        genre:"Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Crooked Cooking",
        link:"https://www.youtube.com/watch?v=bfLsgYM2uns&ab_channel=ILoveTekno%E0%A5%90",
        genre:"Acid Core"
    },
    {
        artist:'Mr Gasmask',
        title: "Live Mr Gasmask",
        link: "https://www.youtube.com/watch?v=zGLF4A1yavk&t=171s&ab_channel=WEARERAVE",
        genre: 'Acid Core'
    }, 
    {
        artist:'Mr Gasmask',
        title: "Jawbreaker",
        link:'https://www.youtube.com/watch?v=FVgskJ6ND58&ab_channel=robber260989',
        genre: 'Acid Core'

    },
    {
        artist:'Mr Gasmask',
        title: "Jawbreaker",
        link: 'https://www.youtube.com/watch?v=AYqsBsrlHxE&list=PLG8JW1UeAE1hTc8d6VTPHqqfueSjXR5OE&index=12&ab_channel=RolandBassline',
        genre: 'Acid Core',
    }
]
var main= document.createElement("main");
document.body.appendChild(main);

for (const track of collection) {
    console.log(track);

    var table= document.createElement("table");

    var li = document.createElement("li");
    var text= document.createTextNode(track.artist);

    var li2 = document.createElement("li");
    var text2= document.createTextNode(track.title);

    var li3 = document.createElement("li");
    var text3= document.createTextNode(track.link);
   
    var li4 = document.createElement("li");
    var text4= document.createTextNode(track.genre);

    main.appendChild(table);
    table.appendChild(li);
    table.appendChild(li2);
    table.appendChild(li3);
    table.appendChild(li4);

    li.appendChild(text);
    li2.appendChild(text2);
    li3.appendChild(text3);
    li4.appendChild(text4);

}


var h = document.createElement("h");
var titre= document.createTextNode("mr");


document.body.style.backgroundColor= "purple";


