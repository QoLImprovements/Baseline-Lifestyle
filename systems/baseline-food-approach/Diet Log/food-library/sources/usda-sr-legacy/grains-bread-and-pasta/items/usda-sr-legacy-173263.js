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
  "id": "usda-sr-legacy-173263",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice, brown, parboiled, cooked, UNCLE BENS",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 31.3,
    "energy_kcal": 614.0,
    "fat_g": 0.85,
    "fibre_g": 1.7,
    "folate_ug": 4.0,
    "iron_mg": 0.53,
    "magnesium_mg": 39.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 96.0,
    "potassium_mg": 61.0,
    "protein_g": 3.09,
    "salt_g": 0.01,
    "sat_fat_g": 0.213,
    "sodium_mg": 4.0,
    "sugar_g": 0.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173263",
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
