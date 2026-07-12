/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal or granola bar (Kashi Chewy)",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 63.4,
    "energy_kcal": 390.0,
    "fat_g": 7.69,
    "fibre_g": 7.7,
    "folate_ug": 39.0,
    "iron_mg": 1.62,
    "magnesium_mg": 321.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 255.0,
    "potassium_mg": 429.0,
    "protein_g": 16.7,
    "salt_g": 0.8025,
    "sat_fat_g": 3.23,
    "sodium_mg": 321.0,
    "sugar_g": 42.3,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708088",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
