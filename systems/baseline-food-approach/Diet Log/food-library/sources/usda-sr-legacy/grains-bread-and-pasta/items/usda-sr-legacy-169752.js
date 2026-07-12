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
  "id": "usda-sr-legacy-169752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Hominy, canned, yellow",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 14.3,
    "energy_kcal": 301.0,
    "fat_g": 0.88,
    "fibre_g": 2.5,
    "folate_ug": 1.0,
    "iron_mg": 0.62,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 9.0,
    "protein_g": 1.48,
    "salt_g": 0.8625,
    "sat_fat_g": 0.123,
    "sodium_mg": 345.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169752",
  "state": "Canned",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "canned",
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
