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
  "id": "usda-sr-legacy-168891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Wheat, soft red winter",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 74.2,
    "energy_kcal": 1380.0,
    "fat_g": 1.56,
    "fibre_g": 12.5,
    "folate_ug": 41.0,
    "iron_mg": 3.21,
    "magnesium_mg": 126.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 493.0,
    "potassium_mg": 397.0,
    "protein_g": 10.4,
    "salt_g": 0.005,
    "sat_fat_g": 0.289,
    "sodium_mg": 2.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168891",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
