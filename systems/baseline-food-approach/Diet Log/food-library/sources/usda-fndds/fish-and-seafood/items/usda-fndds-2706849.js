/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oyster",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Oysters Rockefeller",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 9.38,
    "energy_kcal": 134.0,
    "fat_g": 7.53,
    "fibre_g": 1.9,
    "folate_ug": 57.0,
    "iron_mg": 3.36,
    "magnesium_mg": 47.0,
    "omega3_g": 0.156,
    "phosphorus_mg": 104.0,
    "potassium_mg": 245.0,
    "protein_g": 7.64,
    "salt_g": 1.075,
    "sat_fat_g": 3.19,
    "sodium_mg": 430.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 280.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 217.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706849",
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
