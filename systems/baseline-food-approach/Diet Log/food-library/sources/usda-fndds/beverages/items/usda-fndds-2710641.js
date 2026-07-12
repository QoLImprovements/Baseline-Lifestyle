/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beer",
  "id": "usda-fndds-2710641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
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
  "name": "Michelada",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.05,
    "energy_kcal": 33.0,
    "fat_g": 0.15,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 0.22,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 119.0,
    "protein_g": 0.66,
    "salt_g": 0.3425,
    "sat_fat_g": 0.01,
    "sodium_mg": 137.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 24.6,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710641",
  "state": "Unspecified",
  "subcategory": "Beer",
  "tags": [
    "beer",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
