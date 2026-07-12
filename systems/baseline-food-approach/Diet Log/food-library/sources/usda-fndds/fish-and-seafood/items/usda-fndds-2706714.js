/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna noodle casserole with vegetables, cream or white sauce",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 14.2,
    "energy_kcal": 149.0,
    "fat_g": 6.22,
    "fibre_g": 0.9,
    "folate_ug": 35.0,
    "iron_mg": 1.26,
    "magnesium_mg": 20.0,
    "omega3_g": 0.068,
    "phosphorus_mg": 114.0,
    "potassium_mg": 178.0,
    "protein_g": 8.99,
    "salt_g": 0.5275,
    "sat_fat_g": 2.76,
    "sodium_mg": 211.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706714",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
