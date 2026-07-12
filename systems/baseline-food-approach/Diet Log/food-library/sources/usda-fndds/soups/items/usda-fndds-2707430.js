/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2707430",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sambar, vegetable stew",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 11.8,
    "energy_kcal": 86.0,
    "fat_g": 2.71,
    "fibre_g": 4.0,
    "folate_ug": 86.0,
    "iron_mg": 1.67,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 237.0,
    "protein_g": 4.33,
    "salt_g": 0.5175,
    "sat_fat_g": 0.367,
    "sodium_mg": 207.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707430",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "soups",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
