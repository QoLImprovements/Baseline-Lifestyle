/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Winter melon, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.95,
    "energy_kcal": 36.0,
    "fat_g": 2.74,
    "fibre_g": 1.0,
    "folate_ug": 4.0,
    "iron_mg": 0.37,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 5.0,
    "protein_g": 0.4,
    "salt_g": 0.5625,
    "sat_fat_g": 0.682,
    "sodium_mg": 225.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710004",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "fruit",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
