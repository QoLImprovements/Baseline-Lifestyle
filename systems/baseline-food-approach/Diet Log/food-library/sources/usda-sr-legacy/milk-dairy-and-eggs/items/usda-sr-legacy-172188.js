/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-sifted",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "cup-sifted",
      "kind": "unit",
      "label": "cup, sifted"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, whole, dried",
  "nutritionPerBasis": {
    "calcium_mg": 244.0,
    "carbs_g": 1.13,
    "energy_kcal": 2480.0,
    "fat_g": 43.9,
    "fibre_g": 0.0,
    "folate_ug": 119.0,
    "iron_mg": 7.2,
    "magnesium_mg": 34.0,
    "omega3_g": 0.393,
    "phosphorus_mg": 629.0,
    "potassium_mg": 540.0,
    "protein_g": 48.0,
    "salt_g": 1.19,
    "sat_fat_g": 15.1,
    "sodium_mg": 476.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 301.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.88,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172188",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
