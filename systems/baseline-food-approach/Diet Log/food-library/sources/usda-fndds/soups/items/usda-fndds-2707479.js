/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2707479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Vegetarian stew",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 3.12,
    "energy_kcal": 33.0,
    "fat_g": 2.15,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 0.22,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 17.0,
    "potassium_mg": 114.0,
    "protein_g": 0.67,
    "salt_g": 0.36,
    "sat_fat_g": 1.15,
    "sodium_mg": 144.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 17.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707479",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "soups",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
