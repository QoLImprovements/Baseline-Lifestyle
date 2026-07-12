/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-bottle-8-fl-oz",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-bottle-8-fl-oz",
      "kind": "unit",
      "label": "1 bottle (8 fl oz)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-can-8-fl-oz",
      "kind": "unit",
      "label": "1 can (8 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink, sugar free (Glucerna)",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 11.9,
    "energy_kcal": 88.0,
    "fat_g": 3.08,
    "fibre_g": 2.2,
    "folate_ug": 44.0,
    "iron_mg": 1.98,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 176.0,
    "protein_g": 4.4,
    "salt_g": 0.23,
    "sat_fat_g": 0.232,
    "sodium_mg": 92.0,
    "sugar_g": 2.64,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 26.4,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710719",
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
