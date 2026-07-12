/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Melons",
  "id": "usda-fndds-2709227",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Melon, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 8.27,
    "energy_kcal": 35.0,
    "fat_g": 0.16,
    "fibre_g": 0.7,
    "folate_ug": 12.0,
    "iron_mg": 0.26,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 166.0,
    "protein_g": 0.66,
    "salt_g": 0.04,
    "sat_fat_g": 0.035,
    "sodium_mg": 16.0,
    "sugar_g": 7.4,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709227",
  "state": "Frozen",
  "subcategory": "Melons",
  "tags": [
    "frozen",
    "fruit",
    "melons"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
