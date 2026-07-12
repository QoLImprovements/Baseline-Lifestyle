/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-medium",
  "description": "Coffee",
  "id": "usda-fndds-2710403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup-8-fl-oz",
      "kind": "unit",
      "label": "1 cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 620.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Frozen coffee drink, with non-dairy milk and whipped cream",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 12.1,
    "energy_kcal": 75.0,
    "fat_g": 2.64,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.16,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 19.0,
    "potassium_mg": 45.0,
    "protein_g": 0.62,
    "salt_g": 0.065,
    "sat_fat_g": 1.16,
    "sodium_mg": 26.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710403",
  "state": "Frozen",
  "subcategory": "Coffee",
  "tags": [
    "beverages",
    "coffee",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
