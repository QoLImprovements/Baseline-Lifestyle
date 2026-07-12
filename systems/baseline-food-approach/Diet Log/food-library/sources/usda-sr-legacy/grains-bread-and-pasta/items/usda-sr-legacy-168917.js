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
  "id": "usda-sr-legacy-168917",
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
  "name": "Quinoa, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 21.3,
    "energy_kcal": 503.0,
    "fat_g": 1.92,
    "fibre_g": 2.8,
    "folate_ug": 42.0,
    "iron_mg": 1.49,
    "magnesium_mg": 64.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 152.0,
    "potassium_mg": 172.0,
    "protein_g": 4.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.231,
    "sodium_mg": 7.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168917",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
