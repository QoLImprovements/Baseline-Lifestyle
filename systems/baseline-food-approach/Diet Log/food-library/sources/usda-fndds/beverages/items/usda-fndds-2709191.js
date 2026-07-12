/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz",
  "description": "Citrus juice",
  "id": "usda-fndds-2709191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Orange juice, 100%, frozen, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 35.2,
    "energy_kcal": 148.0,
    "fat_g": 0.25,
    "fibre_g": 1.0,
    "folate_ug": 77.0,
    "iron_mg": 0.33,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 629.0,
    "protein_g": 2.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.059,
    "sodium_mg": 7.0,
    "sugar_g": 29.7,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 145.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709191",
  "state": "Frozen",
  "subcategory": "Citrus juice",
  "tags": [
    "beverages",
    "citrus-juice",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
