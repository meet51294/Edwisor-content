//code here

//function to sidplay 
function displayInfo(id,num,name,height,weight,candy,egg) {
  viewInfo = 'id: '+id+"\n"+ 'num: '+num+"\n"+ 'name: '+name+"\n"+ 'height: '+height+"\n" + 'weight: '+weight+"\n"+ 
              'candy: '+candy+"\n"+ 'egg: '+egg; 
  return viewInfo;
}//end function
var myInfo = displayInfo(1,001,"Bulbasaur",0.71,"6.9kg","Bulbasaur candy","2 km");
alert(myInfo);
