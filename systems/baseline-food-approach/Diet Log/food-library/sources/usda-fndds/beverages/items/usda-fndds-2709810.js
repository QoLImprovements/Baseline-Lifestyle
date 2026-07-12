/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable juice",
  "id": "usda-fndds-2709810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mixed vegetable juice",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 6.3,
    "energy_kcal": 28.0,
    "fat_g": 0.16,
    "fibre_g": 1.2,
    "folate_ug": 20.0,
    "iron_mg": 0.23,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 278.0,
    "protein_g": 0.72,
    "salt_g": 0.205,
    "sat_fat_g": 0.034,
    "sodium_mg": 82.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 489.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 22.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709810",
  "state": "Unspecified",
  "subcategory": "Vegetable juice",
  "tags": [
    "beverages",
    "unspecified",
    "vegetable-juice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
