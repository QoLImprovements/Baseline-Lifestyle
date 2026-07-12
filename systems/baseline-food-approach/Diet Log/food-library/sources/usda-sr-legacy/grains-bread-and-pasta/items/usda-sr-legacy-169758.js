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
  "id": "usda-sr-legacy-169758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice, white, long-grain, parboiled, unenriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 80.9,
    "energy_kcal": 374.0,
    "fat_g": 1.03,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.74,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 174.0,
    "protein_g": 7.51,
    "salt_g": 0.005,
    "sat_fat_g": 0.294,
    "sodium_mg": 2.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169758",
  "state": "Boiled",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "boiled",
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
