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
  "id": "usda-sr-legacy-168892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Wheat germ, crude",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 51.8,
    "energy_kcal": 1510.0,
    "fat_g": 9.72,
    "fibre_g": 13.2,
    "folate_ug": 281.0,
    "iron_mg": 6.26,
    "magnesium_mg": 239.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 842.0,
    "potassium_mg": 892.0,
    "protein_g": 23.2,
    "salt_g": 0.03,
    "sat_fat_g": 1.66,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168892",
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
