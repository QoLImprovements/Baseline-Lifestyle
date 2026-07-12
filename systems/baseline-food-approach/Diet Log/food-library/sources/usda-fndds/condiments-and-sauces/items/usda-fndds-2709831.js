/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach salad, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 2.09,
    "energy_kcal": 84.0,
    "fat_g": 5.07,
    "fibre_g": 1.2,
    "folate_ug": 93.0,
    "iron_mg": 1.22,
    "magnesium_mg": 71.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 91.0,
    "potassium_mg": 480.0,
    "protein_g": 7.02,
    "salt_g": 0.55,
    "sat_fat_g": 1.55,
    "sodium_mg": 220.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 236.0,
    "vitamin_c_mg": 19.1,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 348.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709831",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
