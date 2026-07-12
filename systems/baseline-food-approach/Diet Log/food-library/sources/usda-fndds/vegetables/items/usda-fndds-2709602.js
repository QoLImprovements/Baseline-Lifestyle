/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709602",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Kale, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 265.0,
    "carbs_g": 4.61,
    "energy_kcal": 69.0,
    "fat_g": 4.29,
    "fibre_g": 4.3,
    "folate_ug": 48.0,
    "iron_mg": 1.67,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 363.0,
    "protein_g": 3.05,
    "salt_g": 0.4625,
    "sat_fat_g": 0.902,
    "sodium_mg": 185.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 251.0,
    "vitamin_c_mg": 68.1,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 408.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709602",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
