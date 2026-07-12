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
  "id": "usda-sr-legacy-168942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wheat flour, white (industrial), 13% protein, bleached, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 72.2,
    "energy_kcal": 362.0,
    "fat_g": 1.38,
    "fibre_g": 2.4,
    "folate_ug": 170.0,
    "iron_mg": 5.06,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 128.0,
    "protein_g": 13.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.189,
    "sodium_mg": 2.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168942",
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
