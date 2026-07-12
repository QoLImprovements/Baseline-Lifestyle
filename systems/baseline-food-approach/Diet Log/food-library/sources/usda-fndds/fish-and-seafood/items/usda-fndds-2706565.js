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
  "id": "usda-fndds-2706565",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cake-or-patty",
      "kind": "unit",
      "label": "1 cake or patty"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp, cake or patty",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 5.26,
    "energy_kcal": 218.0,
    "fat_g": 15.3,
    "fibre_g": 0.3,
    "folate_ug": 24.0,
    "iron_mg": 0.65,
    "magnesium_mg": 23.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 243.0,
    "potassium_mg": 133.0,
    "protein_g": 13.9,
    "salt_g": 0.8225,
    "sat_fat_g": 2.56,
    "sodium_mg": 329.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.6,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706565",
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
