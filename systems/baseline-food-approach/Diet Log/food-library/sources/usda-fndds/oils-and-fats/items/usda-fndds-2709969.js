/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 13.8,
    "energy_kcal": 95.0,
    "fat_g": 2.45,
    "fibre_g": 4.4,
    "folate_ug": 57.0,
    "iron_mg": 1.47,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 75.0,
    "potassium_mg": 107.0,
    "protein_g": 5.0,
    "salt_g": 0.4975,
    "sat_fat_g": 0.991,
    "sodium_mg": 199.0,
    "sugar_g": 4.27,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709969",
  "state": "Frozen",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
