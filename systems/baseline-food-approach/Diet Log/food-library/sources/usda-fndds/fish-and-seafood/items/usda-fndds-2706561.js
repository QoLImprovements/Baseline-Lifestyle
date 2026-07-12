/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cake-or-patty",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cake-or-patty",
      "kind": "unit",
      "label": "1 cake or patty"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Clam cake or patty",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 6.79,
    "energy_kcal": 246.0,
    "fat_g": 15.4,
    "fibre_g": 0.2,
    "folate_ug": 13.0,
    "iron_mg": 2.24,
    "magnesium_mg": 26.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 259.0,
    "potassium_mg": 476.0,
    "protein_g": 19.0,
    "salt_g": 1.02,
    "sat_fat_g": 2.5,
    "sodium_mg": 408.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.21,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706561",
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
