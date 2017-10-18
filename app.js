state = {
  items: []
};

$('.entry-item').submit(function(event){
  event.preventDefault();
  //console.log('clicked');
  addToList(state, $('#shopping-list-entry').val());
  renderList(state, $('.shopping-list'));
  
}); //end of DOM



$('ul').on('click', '.shopping-item-toggle', function(event){
  console.log('oh you did it this time');
  //renderList(state, $('.shopping-list'));
});

$('ul').on('click', '.shopping-item-delete', function(event){
  console.log('uhoh');
  //renderList(state, $('.shopping-list'));
});



function removeItem(){
  
  
}

function toggleCheck(element){
  console.log(element.parents().classList);
  
}

function addToList(state, entryItem){
 //map instead of add
  /*var element = '<li> <span class = \"shopping-item shopping-item__checked\">'+entryItem+'</span>';
  element += "<div class = \"shopping-item-controls\"><button class=\"shopping-item-toggle\">";
  element += "<span class = \"button-label\">check</span></button><button class=\"shopping-item-delete\">";
  element += "<span class = \"button-label\">delete</span></button></div></li>";
  */
  state.items.push(
    {itemName: entryItem,
     checkoff: false});
  //console.log('appended');  
} //end of addToList

function renderList(state, element){
  var itemsHtml = state.items.map(function(item){
    return '<li> <span class = \"shopping-item\">'+ item.itemName+'</span>' + "<div class = \"shopping-item-controls\"><button class=\"shopping-item-toggle\">" + "<span class = \"button-label\">check</span></button><button class=\"shopping-item-delete\">" +"<span class = \"button-label\">delete</span></button></div></li>";
  });
  element.html(itemsHtml);
  //console.log('rendered!'); 
}

