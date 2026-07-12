/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    }
  ],
  "name": "Plantain, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 30.9,
    "energy_kcal": 141.0,
    "fat_g": 2.88,
    "fibre_g": 1.6,
    "folate_ug": 18.0,
    "iron_mg": 0.54,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 472.0,
    "protein_g": 1.27,
    "salt_g": 0.3125,
    "sat_fat_g": 0.666,
    "sodium_mg": 125.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 30.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709561",
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
