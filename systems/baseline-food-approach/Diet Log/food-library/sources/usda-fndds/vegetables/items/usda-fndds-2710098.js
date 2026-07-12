/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-slice",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pickles, fried",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 20.7,
    "energy_kcal": 213.0,
    "fat_g": 12.9,
    "fibre_g": 1.2,
    "folate_ug": 44.0,
    "iron_mg": 1.58,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 84.0,
    "protein_g": 3.44,
    "salt_g": 1.55,
    "sat_fat_g": 1.98,
    "sodium_mg": 620.0,
    "sugar_g": 0.82,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 28.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710098",
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
