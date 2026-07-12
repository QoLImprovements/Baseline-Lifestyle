/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried eggplant",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 22.3,
    "energy_kcal": 218.0,
    "fat_g": 12.8,
    "fibre_g": 2.0,
    "folate_ug": 49.0,
    "iron_mg": 1.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 135.0,
    "protein_g": 3.66,
    "salt_g": 0.7875,
    "sat_fat_g": 1.78,
    "sodium_mg": 315.0,
    "sugar_g": 1.77,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 2.43,
    "vitamin_k_ug": 13.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710048",
  "state": "Fried",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried",
    "fried-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
