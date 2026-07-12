/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-oz",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Pasta, homemade, made without egg, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 25.1,
    "energy_kcal": 519.0,
    "fat_g": 0.98,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 1.13,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 19.0,
    "protein_g": 4.37,
    "salt_g": 0.185,
    "sat_fat_g": 0.14,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168902",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
