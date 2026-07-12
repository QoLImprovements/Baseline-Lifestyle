/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-ring",
      "kind": "unit",
      "label": "1 ring"
    }
  ],
  "name": "Fried onion rings",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 39.9,
    "energy_kcal": 352.0,
    "fat_g": 19.8,
    "fibre_g": 2.6,
    "folate_ug": 36.0,
    "iron_mg": 0.96,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 151.0,
    "protein_g": 4.19,
    "salt_g": 1.4375,
    "sat_fat_g": 3.17,
    "sodium_mg": 575.0,
    "sugar_g": 4.96,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 2.74,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710055",
  "state": "Fried",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried",
    "fried-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
