/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Coffee",
  "id": "usda-fndds-2710442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 620.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup-8-fl-oz",
      "kind": "unit",
      "label": "1 cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Coffee, Iced Latte, decaffeinated, with non-dairy milk, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 5.18,
    "energy_kcal": 31.0,
    "fat_g": 0.84,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.18,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 45.0,
    "protein_g": 0.59,
    "salt_g": 0.0725,
    "sat_fat_g": 0.095,
    "sodium_mg": 29.0,
    "sugar_g": 4.41,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710442",
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
