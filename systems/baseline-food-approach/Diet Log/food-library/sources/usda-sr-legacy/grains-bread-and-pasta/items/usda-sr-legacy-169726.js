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
  "id": "usda-sr-legacy-169726",
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
  "name": "Wild rice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 74.9,
    "energy_kcal": 1490.0,
    "fat_g": 1.08,
    "fibre_g": 6.2,
    "folate_ug": 95.0,
    "iron_mg": 1.96,
    "magnesium_mg": 177.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 433.0,
    "potassium_mg": 427.0,
    "protein_g": 14.7,
    "salt_g": 0.0175,
    "sat_fat_g": 0.156,
    "sodium_mg": 7.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169726",
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
