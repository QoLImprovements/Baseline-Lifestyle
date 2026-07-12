/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-floweret",
  "description": "Broccoli",
  "id": "usda-fndds-2709644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    }
  ],
  "name": "Broccoli, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 6.2,
    "energy_kcal": 77.0,
    "fat_g": 4.66,
    "fibre_g": 2.4,
    "folate_ug": 55.0,
    "iron_mg": 0.69,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 67.0,
    "potassium_mg": 300.0,
    "protein_g": 2.55,
    "salt_g": 0.6025,
    "sat_fat_g": 1.17,
    "sodium_mg": 241.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 76.6,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 104.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709644",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
