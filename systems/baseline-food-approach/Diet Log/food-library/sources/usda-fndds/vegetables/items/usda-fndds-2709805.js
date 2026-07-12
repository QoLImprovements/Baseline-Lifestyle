/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Seaweed, raw",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 7.94,
    "energy_kcal": 41.0,
    "fat_g": 0.49,
    "fibre_g": 0.7,
    "folate_ug": 174.0,
    "iron_mg": 2.28,
    "magnesium_mg": 77.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 60.0,
    "potassium_mg": 165.0,
    "protein_g": 3.51,
    "salt_g": 0.96,
    "sat_fat_g": 0.146,
    "sodium_mg": 384.0,
    "sugar_g": 0.58,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 25.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709805",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
