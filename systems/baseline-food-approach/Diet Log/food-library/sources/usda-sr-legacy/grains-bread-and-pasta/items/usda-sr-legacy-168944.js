/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wheat flour, whole-grain, soft wheat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 74.5,
    "energy_kcal": 1390.0,
    "fat_g": 1.95,
    "fibre_g": 13.1,
    "folate_ug": 28.0,
    "iron_mg": 3.71,
    "magnesium_mg": 117.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 323.0,
    "potassium_mg": 394.0,
    "protein_g": 9.61,
    "salt_g": 0.0075,
    "sat_fat_g": 0.43,
    "sodium_mg": 3.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168944",
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
