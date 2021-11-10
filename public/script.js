$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("");
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum <br> quia dolor sit <br> amet consectetur", 
	"consectetur adipiscing <br> elit", 
	"sed do eiusmod <br> tempor incididunt ut <br> labore et dolore <br> magna aliqua.", 
	"Ut enim ad <br> minim veniam", 
	"quis nostrud <br> exercitation <br> ullamco laboris", 
	"nisi ut aliquip <br> ex ea commodo <br> consequat", 
	"Duis aute irure <br> dolor in reprehenderit <br> in voluptate", 
	"velit esse <br> cillum dolore <br> eu fugiat <br> nulla pariatur.", 
	"Excepteur sint <br> occaecat cupidatat <br> non proident", 
	"sunt in culpa <br> qui officia deserunt <br> mollit anim id <br> est laborum."];
	for(var i = 0; i < quantity; i++){
		lorem.append("<p>"+data[i % (data.length)]+"</p>"); 
	}
})