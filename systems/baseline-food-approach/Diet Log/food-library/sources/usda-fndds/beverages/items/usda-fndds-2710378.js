/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz",
  "description": "Coffee",
  "id": "usda-fndds-2710378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-espresso-cup-2-fl-oz",
      "kind": "unit",
      "label": "1 espresso cup (2 fl oz)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee, espresso",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 1.67,
    "energy_kcal": 9.0,
    "fat_g": 0.18,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.13,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 115.0,
    "protein_g": 0.12,
    "salt_g": 0.035,
    "sat_fat_g": 0.092,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710378",
  "state": "Unspecified",
  "subcategory": "Coffee",
  "tags": [
    "beverages",
    "coffee",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
