/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
    }
  ],
  "name": "Clams Casino",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 10.3,
    "energy_kcal": 162.0,
    "fat_g": 7.9,
    "fibre_g": 1.0,
    "folate_ug": 19.0,
    "iron_mg": 1.24,
    "magnesium_mg": 20.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 155.0,
    "potassium_mg": 185.0,
    "protein_g": 11.8,
    "salt_g": 1.135,
    "sat_fat_g": 2.22,
    "sodium_mg": 454.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706564",
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
