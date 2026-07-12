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
  "id": "usda-fndds-2709880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Broccoflower, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 6.15,
    "energy_kcal": 55.0,
    "fat_g": 2.96,
    "fibre_g": 3.2,
    "folate_ug": 49.0,
    "iron_mg": 0.74,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 303.0,
    "protein_g": 2.98,
    "salt_g": 0.3725,
    "sat_fat_g": 0.741,
    "sodium_mg": 149.0,
    "sugar_g": 3.06,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 75.5,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 22.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709880",
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
