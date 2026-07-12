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
  "id": "usda-fndds-2706850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lomi salmon",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 3.31,
    "energy_kcal": 60.0,
    "fat_g": 1.86,
    "fibre_g": 1.0,
    "folate_ug": 20.0,
    "iron_mg": 0.51,
    "magnesium_mg": 18.0,
    "omega3_g": 0.377,
    "phosphorus_mg": 135.0,
    "potassium_mg": 270.0,
    "protein_g": 7.55,
    "salt_g": 0.3625,
    "sat_fat_g": 0.321,
    "sodium_mg": 145.0,
    "sugar_g": 1.82,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706850",
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
