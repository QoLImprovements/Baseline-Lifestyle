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
  "id": "usda-fndds-2709640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Watercress, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 1.35,
    "energy_kcal": 36.0,
    "fat_g": 2.84,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 0.21,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 344.0,
    "protein_g": 2.4,
    "salt_g": 0.4325,
    "sat_fat_g": 0.744,
    "sodium_mg": 173.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 31.3,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 262.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709640",
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
