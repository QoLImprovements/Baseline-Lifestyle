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
  "id": "usda-sr-legacy-168886",
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
  "name": "Rye flour, medium",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 75.4,
    "energy_kcal": 1460.0,
    "fat_g": 1.52,
    "fibre_g": 11.8,
    "folate_ug": 34.0,
    "iron_mg": 2.54,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 374.0,
    "protein_g": 10.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.18,
    "sodium_mg": 2.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168886",
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
