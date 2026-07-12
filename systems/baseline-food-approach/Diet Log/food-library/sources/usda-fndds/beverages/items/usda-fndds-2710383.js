/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-espresso-cup-2-fl-oz",
  "description": "Coffee",
  "id": "usda-fndds-2710383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-espresso-cup-2-fl-oz",
      "kind": "unit",
      "label": "1 espresso cup (2 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee, macchiato, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.89,
    "energy_kcal": 40.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.09,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 123.0,
    "protein_g": 1.13,
    "salt_g": 0.0525,
    "sat_fat_g": 0.453,
    "sodium_mg": 21.0,
    "sugar_g": 5.84,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710383",
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
