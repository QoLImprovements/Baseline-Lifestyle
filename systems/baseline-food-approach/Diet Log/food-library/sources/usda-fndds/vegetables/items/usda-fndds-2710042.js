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
  "id": "usda-fndds-2710042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried cauliflower",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 21.9,
    "energy_kcal": 218.0,
    "fat_g": 12.9,
    "fibre_g": 1.6,
    "folate_ug": 60.0,
    "iron_mg": 1.67,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 159.0,
    "protein_g": 4.02,
    "salt_g": 0.815,
    "sat_fat_g": 1.82,
    "sodium_mg": 326.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 16.1,
    "vitamin_e_mg": 2.34,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710042",
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
