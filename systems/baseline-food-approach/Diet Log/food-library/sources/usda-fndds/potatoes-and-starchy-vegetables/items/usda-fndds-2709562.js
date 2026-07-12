/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Plantain, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 30.9,
    "energy_kcal": 138.0,
    "fat_g": 2.53,
    "fibre_g": 1.6,
    "folate_ug": 18.0,
    "iron_mg": 0.53,
    "magnesium_mg": 35.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 32.0,
    "potassium_mg": 472.0,
    "protein_g": 1.27,
    "salt_g": 0.3325,
    "sat_fat_g": 0.944,
    "sodium_mg": 133.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 29.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709562",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "other-starchy-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
