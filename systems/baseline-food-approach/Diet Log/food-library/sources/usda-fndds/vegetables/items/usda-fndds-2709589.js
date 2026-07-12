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
  "id": "usda-fndds-2709589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dandelion greens, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 195.0,
    "carbs_g": 9.58,
    "energy_kcal": 71.0,
    "fat_g": 3.47,
    "fibre_g": 3.6,
    "folate_ug": 21.0,
    "iron_mg": 3.23,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 414.0,
    "protein_g": 2.82,
    "salt_g": 0.5225,
    "sat_fat_g": 0.893,
    "sodium_mg": 209.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 515.0,
    "vitamin_c_mg": 25.5,
    "vitamin_e_mg": 3.99,
    "vitamin_k_ug": 812.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709589",
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
