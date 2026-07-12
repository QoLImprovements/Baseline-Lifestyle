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
  "id": "usda-sr-legacy-169744",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Wheat, khorasan, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 27.6,
    "energy_kcal": 552.0,
    "fat_g": 0.83,
    "fibre_g": 4.3,
    "folate_ug": 11.0,
    "iron_mg": 1.76,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 164.0,
    "protein_g": 5.71,
    "salt_g": 0.02,
    "sat_fat_g": 0.077,
    "sodium_mg": 8.0,
    "sugar_g": 3.07,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169744",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
