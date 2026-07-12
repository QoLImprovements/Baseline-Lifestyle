/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709958",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
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
  "name": "Green peas, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 14.3,
    "energy_kcal": 119.0,
    "fat_g": 4.72,
    "fibre_g": 5.6,
    "folate_ug": 55.0,
    "iron_mg": 1.46,
    "magnesium_mg": 33.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 107.0,
    "potassium_mg": 242.0,
    "protein_g": 5.37,
    "salt_g": 0.5275,
    "sat_fat_g": 1.2,
    "sodium_mg": 211.0,
    "sugar_g": 5.61,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 33.6,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 28.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709958",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "other-starchy-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
