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
  "id": "usda-sr-legacy-168872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Oat bran, raw",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 66.2,
    "energy_kcal": 1030.0,
    "fat_g": 7.03,
    "fibre_g": 15.4,
    "folate_ug": 52.0,
    "iron_mg": 5.41,
    "magnesium_mg": 235.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 734.0,
    "potassium_mg": 566.0,
    "protein_g": 17.3,
    "salt_g": 0.01,
    "sat_fat_g": 1.33,
    "sodium_mg": 4.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168872",
  "state": "Raw",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
