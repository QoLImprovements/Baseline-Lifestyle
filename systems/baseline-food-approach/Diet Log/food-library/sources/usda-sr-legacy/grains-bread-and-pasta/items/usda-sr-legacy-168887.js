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
  "id": "usda-sr-legacy-168887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rye flour, light",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 76.7,
    "energy_kcal": 357.0,
    "fat_g": 1.33,
    "fibre_g": 8.0,
    "folate_ug": 23.0,
    "iron_mg": 0.91,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 224.0,
    "protein_g": 9.82,
    "salt_g": 0.005,
    "sat_fat_g": 0.15,
    "sodium_mg": 2.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168887",
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
