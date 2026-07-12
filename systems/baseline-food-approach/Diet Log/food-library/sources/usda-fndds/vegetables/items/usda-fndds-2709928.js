/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709928",
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
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cucumber, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.37,
    "energy_kcal": 45.0,
    "fat_g": 3.2,
    "fibre_g": 0.6,
    "folate_ug": 7.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 194.0,
    "protein_g": 0.72,
    "salt_g": 0.3625,
    "sat_fat_g": 0.826,
    "sodium_mg": 145.0,
    "sugar_g": 1.91,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 29.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709928",
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
