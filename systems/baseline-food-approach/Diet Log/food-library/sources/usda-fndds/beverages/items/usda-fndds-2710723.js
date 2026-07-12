/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 341.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 341.0,
      "key": "1-can-11-fl-oz",
      "kind": "unit",
      "label": "1 can (11 fl oz)"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink, sugar free (Slim Fast)",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 7.74,
    "energy_kcal": 57.0,
    "fat_g": 1.93,
    "fibre_g": 1.6,
    "folate_ug": 39.0,
    "iron_mg": 0.87,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 193.0,
    "protein_g": 3.32,
    "salt_g": 0.17,
    "sat_fat_g": 0.54,
    "sodium_mg": 68.0,
    "sugar_g": 5.95,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 4.58,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710723",
  "state": "Unspecified",
  "subcategory": "Nutritional beverages",
  "tags": [
    "beverages",
    "nutritional-beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
