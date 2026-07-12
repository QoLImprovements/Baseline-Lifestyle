/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-floweret",
  "description": "Broccoli",
  "id": "usda-fndds-2709651",
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
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Broccoli, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.33,
    "energy_kcal": 60.0,
    "fat_g": 2.62,
    "fibre_g": 2.4,
    "folate_ug": 56.0,
    "iron_mg": 0.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 68.0,
    "potassium_mg": 306.0,
    "protein_g": 2.61,
    "salt_g": 0.4275,
    "sat_fat_g": 1.02,
    "sodium_mg": 171.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 78.3,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 104.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709651",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
