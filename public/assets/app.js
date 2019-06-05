
try {
    $("#submitBtn").on("click", function(){
        console.log("clicked");
        const ingredientList=combineIngredients();
        console.log(ingredientList);
        const diet=$("#diet_id").val();
        console.log(diet);
        const health=$("#health_id").val();
        console.log(health);
        const calorie=$("#calorie_id").val();
        console.log(calorie);
        const exclusions = $("#exclusions_id").val().trim().replace(' ', '-');
        console.log(exclusions);
    
        
        const queryParams = $.param({
            "q": ingredientList,
            "diet": diet,
            "health":health,
            "calorie": calorie,
            "from":0,
            "to":6
        });
        
        window.location.replace("/results?" + queryParams);
    
    });
}

catch(err) {
    $("#resultsBox").append("Sorry Neighbor, no recipes matching your request was found...")
}




function recipeRender(image,label,calories,url) {
        $("#resultsBox").append(`
        <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img src="${image}" alt="image">
          </figure>
        </div>
        <div class="card-content">
                <div class="media-content">
              <p class="title is-4">${label}</p>
              <p class="subtitle is-6">${calories}</p>
              <p><a>${url}</a></p>
            </div>
          </div>
      
          <div class="content">
            Recipe contents and directions.
            <a class="button">Save Recipe</a>
            <br>
          </div>
        </div>
      </div>
        `);
};
let ingredientCount = 2;
function ingredients(count) {
$("#ingredientContainer").append(`<br><input id="ingredientInput${count}" placeholder="ingredient #${count}">`);
};

$("#addIngredientBtn").on("click", (e)=> {
  e.preventDefault();
  ingredients(ingredientCount);
  ingredientCount++;
});

function combineIngredients() {
  if($("#ingredientInput2").val()){
  let ingredientString = "";
  for(i=2; i < ingredientCount; i++){
    ingredientString += "&q=" + $(`#ingredientInput${i}`).val();
  };
  console.log(ingredientString)
  return $("#ingredientInput1").val()+ingredientString;
} else {
}

}




