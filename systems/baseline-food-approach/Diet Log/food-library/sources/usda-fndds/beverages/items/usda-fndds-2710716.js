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
  "id": "usda-fndds-2710716",
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
      "gramsPerUnit": 341.0,
      "key": "1-bottle-11-fl-oz",
      "kind": "unit",
      "label": "1 bottle (11 fl oz)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink (Carnation Instant Breakfast)",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 12.9,
    "energy_kcal": 92.0,
    "fat_g": 2.04,
    "fibre_g": 0.1,
    "folate_ug": 39.0,
    "iron_mg": 1.69,
    "magnesium_mg": 40.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 145.0,
    "potassium_mg": 260.0,
    "protein_g": 5.51,
    "salt_g": 0.21,
    "sat_fat_g": 1.16,
    "sodium_mg": 84.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 132.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710716",
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
