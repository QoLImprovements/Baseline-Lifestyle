/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice, white, long-grain, parboiled, unenriched, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 26.0,
    "energy_kcal": 513.0,
    "fat_g": 0.37,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 56.0,
    "protein_g": 2.91,
    "salt_g": 0.005,
    "sat_fat_g": 0.074,
    "sodium_mg": 2.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169759",
  "state": "Boiled",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "boiled",
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
