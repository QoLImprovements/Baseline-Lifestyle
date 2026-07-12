/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Eggs, scrambled, frozen mixture",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.5,
    "energy_kcal": 548.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.23,
    "magnesium_mg": 10.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 30.0,
    "potassium_mg": 147.0,
    "protein_g": 13.1,
    "salt_g": 0.405,
    "sat_fat_g": 1.05,
    "sodium_mg": 162.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169904",
  "state": "Scrambled",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
