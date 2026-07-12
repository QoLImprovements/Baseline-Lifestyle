/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cabbage",
  "id": "usda-fndds-2709892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 710.0,
      "key": "1-small-head-about-4-1-2-dia",
      "kind": "unit",
      "label": "1 small head (about 4-1/2\" dia)"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage, green, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 6.44,
    "energy_kcal": 52.0,
    "fat_g": 2.51,
    "fibre_g": 2.5,
    "folate_ug": 37.0,
    "iron_mg": 0.07,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 28.0,
    "potassium_mg": 209.0,
    "protein_g": 0.99,
    "salt_g": 0.3775,
    "sat_fat_g": 1.02,
    "sodium_mg": 151.0,
    "sugar_g": 3.24,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 34.5,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 61.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709892",
  "state": "Cooked",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
