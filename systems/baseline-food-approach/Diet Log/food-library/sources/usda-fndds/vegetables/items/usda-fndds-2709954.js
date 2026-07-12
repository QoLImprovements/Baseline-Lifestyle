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
  "id": "usda-fndds-2709954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-heart",
      "kind": "unit",
      "label": "1 heart"
    }
  ],
  "name": "Palm hearts, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 24.8,
    "energy_kcal": 134.0,
    "fat_g": 2.74,
    "fibre_g": 1.5,
    "folate_ug": 20.0,
    "iron_mg": 1.64,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 1750.0,
    "protein_g": 2.62,
    "salt_g": 0.3375,
    "sat_fat_g": 0.711,
    "sodium_mg": 135.0,
    "sugar_g": 16.6,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709954",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
