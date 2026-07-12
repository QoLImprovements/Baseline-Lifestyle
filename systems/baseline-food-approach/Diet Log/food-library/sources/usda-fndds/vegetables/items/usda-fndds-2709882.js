/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-sprout",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-sprout",
      "kind": "unit",
      "label": "1 sprout"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Brussels sprouts, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 8.3,
    "energy_kcal": 42.0,
    "fat_g": 0.39,
    "fibre_g": 4.1,
    "folate_ug": 101.0,
    "iron_mg": 0.48,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 289.0,
    "protein_g": 3.63,
    "salt_g": 0.3275,
    "sat_fat_g": 0.081,
    "sodium_mg": 131.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 45.6,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 193.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709882",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
