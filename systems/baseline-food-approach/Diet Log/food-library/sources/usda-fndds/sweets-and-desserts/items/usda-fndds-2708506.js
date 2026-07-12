/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frito pie",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 26.3,
    "energy_kcal": 328.0,
    "fat_g": 21.0,
    "fibre_g": 2.9,
    "folate_ug": 28.0,
    "iron_mg": 1.24,
    "magnesium_mg": 42.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 196.0,
    "potassium_mg": 187.0,
    "protein_g": 9.96,
    "salt_g": 1.43,
    "sat_fat_g": 5.53,
    "sodium_mg": 572.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 3.27,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708506",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
