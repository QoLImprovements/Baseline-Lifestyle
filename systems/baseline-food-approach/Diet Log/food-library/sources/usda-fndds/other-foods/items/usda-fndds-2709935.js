/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-whole",
  "description": "Onions",
  "id": "usda-fndds-2709935",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Leeks",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 14.7,
    "energy_kcal": 88.0,
    "fat_g": 3.05,
    "fibre_g": 1.9,
    "folate_ug": 57.0,
    "iron_mg": 2.19,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 188.0,
    "protein_g": 1.57,
    "salt_g": 0.3775,
    "sat_fat_g": 0.758,
    "sodium_mg": 151.0,
    "sugar_g": 4.07,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 10.6,
    "vitamin_e_mg": 1.37,
    "vitamin_k_ug": 51.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709935",
  "state": "Unspecified",
  "subcategory": "Onions",
  "tags": [
    "onions",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
