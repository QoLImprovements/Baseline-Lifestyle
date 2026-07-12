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
  "id": "usda-fndds-2710063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stew, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 10.1,
    "energy_kcal": 47.0,
    "fat_g": 0.24,
    "fibre_g": 2.1,
    "folate_ug": 20.0,
    "iron_mg": 0.36,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 258.0,
    "protein_g": 1.41,
    "salt_g": 0.74,
    "sat_fat_g": 0.032,
    "sodium_mg": 296.0,
    "sugar_g": 2.51,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 11.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710063",
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
