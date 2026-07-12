/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Liquor and cocktails",
  "id": "usda-fndds-2710681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-drink",
      "kind": "unit",
      "label": "1 drink"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Alcoholic coffee drink",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 2.1,
    "energy_kcal": 88.0,
    "fat_g": 2.38,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.02,
    "magnesium_mg": 2.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 7.0,
    "potassium_mg": 40.0,
    "protein_g": 0.21,
    "salt_g": 0.0075,
    "sat_fat_g": 1.36,
    "sodium_mg": 3.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710681",
  "state": "Unspecified",
  "subcategory": "Liquor and cocktails",
  "tags": [
    "beverages",
    "liquor-and-cocktails",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
