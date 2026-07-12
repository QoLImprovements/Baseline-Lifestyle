/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green bean casserole",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.05,
    "energy_kcal": 56.0,
    "fat_g": 2.21,
    "fibre_g": 1.9,
    "folate_ug": 17.0,
    "iron_mg": 0.43,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 203.0,
    "protein_g": 1.96,
    "salt_g": 0.79,
    "sat_fat_g": 0.505,
    "sodium_mg": 316.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 31.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710040",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "legumes-and-pulses",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
