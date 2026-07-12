/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-fast-food-order",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried mushrooms",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 21.9,
    "energy_kcal": 222.0,
    "fat_g": 12.9,
    "fibre_g": 1.6,
    "folate_ug": 55.0,
    "iron_mg": 1.62,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 217.0,
    "protein_g": 4.63,
    "salt_g": 0.7925,
    "sat_fat_g": 1.79,
    "sodium_mg": 317.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710053",
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
