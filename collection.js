const collection=[
    {
        artist:'Track #1',
        title: "Acid Attack",
        link: "Addiction EP (2016, Vinyl)",
        url: "Listen",
        genre: 'Acid Core'
    },
    {
        artist:'Track #2',
        title:"Distorted Drum Disciples",
        img: "<img src= 'play.png'>",
        link: 'Neurotrope 36 (2016,Vinyl)',
        url: "Listen",
        genre: "Acid Core"
    },
    {
        artist:'Track #3',
        title:"Chiaroscuro",
        link:"Dune 05 (2013, Vinyl)",
        url: "Listen",
        genre: "Acid Core"
    },
    {
        artist:'Track #4',
        title: "Vonk",
        link:"Analog Tecnè Model 07",
        url: "Listen",
        genre:"Acid Core"
    },
    {
        artist:'Track #5',
        title:"Geisteskranke",
        link: "The Future Is Late EP (2013, Vinyl)",
        url: "Listen",
        genre:'Acid Core'
    },
    {
        artist:'Track #6',
        title:"Flesh Vessel",
        link: "Neurotrope 044(2016, Vinyl)",
        url: "Listen",
        genre:"Acid Core"
    },
    {
        artist:'Track #7',
        title:"Crooked Cooking",
        link: "Neurotrope 044(2016, Vinyl)",
        url: "Listen",
        genre:"Acid Core"
    },
    {
        artist:'Track #8',
        title: "Urtekram",
        link: "Old Skull, Vol 17 (2019)",
        url: "Listen",
        genre: 'Acid Core'
    }, 
    {
        artist:'Track #9',
        title: "Jawbreaker",
        link:"Jawbreaker E.P. (2010, Vinyl)",
        url: "Listen",
        genre: 'Acid Core'
    },
    {
        artist:'Track n°10',
        title: "Time out Forever",
        link: "Jawbreaker E.P. (2010, Vinyl)",
        url: "Listen",
        genre: 'Acid Core',
        }
]

var main= document.querySelector("main");
document.body.appendChild(main);
console.log(document.body.childNodes);


for (const track of collection) {
    console.log(track);
   var div= document.createElement("div");

    var h2 = document.createElement("h2");
    var text= document.createTextNode(track.artist);

    var h3 = document.createElement("h3");
    var text2= document.createTextNode(track.title);

    var p = document.createElement("p");
    var text3= document.createTextNode(track.link);

    var p2 = document.createElement("p");
    var text4= document.createTextNode(track.genre);

    var para = document.createElement("p");
    var url = document.createTextNode(track.url);

    var play = document.createElement('i');
    play.className = "fa fa-play";
    para.appendChild(play);

    var image = document.createElement('img');
    image.className = "image";
    image.src = "url(images/Acid_Attack.jpeg)";
    image.src = "url(images/Distorted_Drum_Disciples)"
    para.appendChild(image);

    main.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(para);

    h2.appendChild(text);
    h3.appendChild(text2);
    p.appendChild(text3);
    p2.appendChild(text4);
    para.appendChild(url);

    play.addEventListener ("click", function() {
    location.href = "https://www.youtube.com/watch?v=CscbxxFNAqc&ab_channel=Essencis";
    location.href = "https://www.youtube.com/watch?v=St2qdwlEbkw&list=RDCscbxxFNAqc&index=4&ab_channel=P4Kid3RM";
    location.href = "https://www.youtube.com/watch?v=cBvlNq0GbHE&ab_channel=voe16";
    location.href = "https://www.youtube.com/watch?v=uR2WV-yBZKQ&ab_channel=mrgasmask303";
    location.href = "https://www.youtube.com/watch?v=IBtdR7Hadi8&ab_channel=ZwoarnAcide";
    location.href = "https://www.youtube.com/watch?v=O3UQa8y855c&ab_channel=EnfantsSagesproduction";
    location.href = "https://www.youtube.com/watch?v=bfLsgYM2uns&ab_channel=ILoveTekno%E0%A5%90";
    location.href = "https://www.youtube.com/watch?v=QqcdOW7ynEk&ab_channel=Tek_nostop";
    location.href = "https://www.youtube.com/watch?v=FVgskJ6ND58&ab_channel=robber260989";
    location.href = "https://www.youtube.com/watch?v=Qk_NTk8WruU&ab_channel=kukuricnepire";
});
}

document.body.style.backgroundColor= "indigo";
