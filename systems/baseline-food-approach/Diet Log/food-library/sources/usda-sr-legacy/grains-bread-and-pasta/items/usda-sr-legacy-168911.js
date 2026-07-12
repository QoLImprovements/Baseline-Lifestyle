/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-oz",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Spaghetti, spinach, dry",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 74.8,
    "energy_kcal": 1560.0,
    "fat_g": 1.57,
    "fibre_g": 10.6,
    "folate_ug": 48.0,
    "iron_mg": 2.13,
    "magnesium_mg": 174.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 332.0,
    "potassium_mg": 376.0,
    "protein_g": 13.4,
    "salt_g": 0.09,
    "sat_fat_g": 0.226,
    "sodium_mg": 36.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 152.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168911",
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
