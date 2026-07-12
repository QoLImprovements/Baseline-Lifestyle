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
  "id": "usda-fndds-2709615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 3.1,
    "energy_kcal": 33.0,
    "fat_g": 0.7,
    "fibre_g": 1.9,
    "folate_ug": 99.0,
    "iron_mg": 1.23,
    "magnesium_mg": 109.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 540.0,
    "protein_g": 3.41,
    "salt_g": 0.655,
    "sat_fat_g": 0.074,
    "sodium_mg": 262.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 341.0,
    "vitamin_c_mg": 24.9,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 566.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709615",
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
