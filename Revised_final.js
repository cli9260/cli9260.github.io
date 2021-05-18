var name = function(value ) {
    console.log( "Irontown: " + value );
};

var callbacks = $.Callbacks();
callbacks.add("name");
callbacks.fire("Irontown");

var para = document.getElementById('description1');
para.innerText = "Featuring: Spirited Away"

var para = document.getElementById('description2')
para.innerText = "Castle in the Sky"

var para = document.getElementById('description3')
para.innerText = "My Neighbor Totoro"

