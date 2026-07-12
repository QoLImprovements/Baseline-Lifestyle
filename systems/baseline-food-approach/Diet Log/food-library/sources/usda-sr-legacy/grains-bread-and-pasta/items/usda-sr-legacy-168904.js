/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-spiral-shaped",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup-spiral-shaped",
      "kind": "unit",
      "label": "cup spiral shaped"
    }
  ],
  "name": "Macaroni, vegetable, enriched, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 26.6,
    "energy_kcal": 536.0,
    "fat_g": 0.11,
    "fibre_g": 4.3,
    "folate_ug": 65.0,
    "iron_mg": 0.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 31.0,
    "protein_g": 4.53,
    "salt_g": 0.015,
    "sat_fat_g": 0.016,
    "sodium_mg": 6.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168904",
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
