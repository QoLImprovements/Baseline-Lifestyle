/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green peas, canned, reduced sodium, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.8,
    "energy_kcal": 89.0,
    "fat_g": 3.11,
    "fibre_g": 4.0,
    "folate_ug": 34.0,
    "iron_mg": 1.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 65.0,
    "potassium_mg": 122.0,
    "protein_g": 3.89,
    "salt_g": 0.08,
    "sat_fat_g": 1.25,
    "sodium_mg": 32.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 21.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709975",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
