/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-floweret",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried broccoli",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 22.4,
    "energy_kcal": 223.0,
    "fat_g": 12.9,
    "fibre_g": 1.7,
    "folate_ug": 63.0,
    "iron_mg": 1.78,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 161.0,
    "protein_g": 4.28,
    "salt_g": 0.8225,
    "sat_fat_g": 1.78,
    "sodium_mg": 329.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 30.6,
    "vitamin_e_mg": 2.37,
    "vitamin_k_ug": 52.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709656",
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
