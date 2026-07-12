/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-glass",
  "description": "Wine",
  "id": "usda-fndds-2710695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "1-glass",
      "kind": "unit",
      "label": "1 glass"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Sangria, red",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 7.23,
    "energy_kcal": 85.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.25,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 68.0,
    "protein_g": 0.04,
    "salt_g": 0.025,
    "sat_fat_g": 0.001,
    "sodium_mg": 10.0,
    "sugar_g": 6.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710695",
  "state": "Unspecified",
  "subcategory": "Wine",
  "tags": [
    "beverages",
    "unspecified",
    "wine"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
