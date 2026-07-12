/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Spinach",
  "id": "usda-fndds-2709620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 3.01,
    "energy_kcal": 59.0,
    "fat_g": 3.68,
    "fibre_g": 1.8,
    "folate_ug": 97.0,
    "iron_mg": 1.2,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 524.0,
    "protein_g": 3.32,
    "salt_g": 0.66,
    "sat_fat_g": 0.855,
    "sodium_mg": 264.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 344.0,
    "vitamin_c_mg": 24.2,
    "vitamin_e_mg": 2.76,
    "vitamin_k_ug": 552.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709620",
  "state": "Cooked",
  "subcategory": "Spinach",
  "tags": [
    "cooked",
    "spinach",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
