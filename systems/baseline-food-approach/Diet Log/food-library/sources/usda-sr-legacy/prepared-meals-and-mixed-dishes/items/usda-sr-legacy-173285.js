/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173285",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 1021.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "PAPA JOHN'S 14\" Pepperoni Pizza, Original Crust",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 30.0,
    "energy_kcal": 275.0,
    "fat_g": 11.9,
    "fibre_g": 1.2,
    "folate_ug": 72.0,
    "iron_mg": 1.98,
    "magnesium_mg": 23.0,
    "omega3_g": 0.175,
    "phosphorus_mg": 196.0,
    "potassium_mg": 150.0,
    "protein_g": 12.0,
    "salt_g": 1.6775,
    "sat_fat_g": 4.91,
    "sodium_mg": 671.0,
    "sugar_g": 4.84,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173285",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
