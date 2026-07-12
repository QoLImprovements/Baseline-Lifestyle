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
  "id": "usda-sr-legacy-168923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cornmeal, white, self-rising, bolted, plain, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 361.0,
    "carbs_g": 70.3,
    "energy_kcal": 1400.0,
    "fat_g": 3.4,
    "fibre_g": 6.7,
    "folate_ug": 233.0,
    "iron_mg": 5.76,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 804.0,
    "potassium_mg": 255.0,
    "protein_g": 8.28,
    "salt_g": 3.125,
    "sat_fat_g": 0.478,
    "sodium_mg": 1250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168923",
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
