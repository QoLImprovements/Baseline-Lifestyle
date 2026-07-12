/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar (KIND Fruit and Nut Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 43.7,
    "energy_kcal": 502.0,
    "fat_g": 32.3,
    "fibre_g": 5.8,
    "folate_ug": 55.0,
    "iron_mg": 3.09,
    "magnesium_mg": 162.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 322.0,
    "potassium_mg": 460.0,
    "protein_g": 13.9,
    "salt_g": 0.1125,
    "sat_fat_g": 3.83,
    "sodium_mg": 45.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 10.2,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708090",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
