/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cubic-inch",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
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
  "name": "Fish, cake or patty",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 10.4,
    "energy_kcal": 212.0,
    "fat_g": 12.6,
    "fibre_g": 1.2,
    "folate_ug": 14.0,
    "iron_mg": 0.72,
    "magnesium_mg": 30.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 179.0,
    "potassium_mg": 430.0,
    "protein_g": 13.6,
    "salt_g": 1.0725,
    "sat_fat_g": 3.94,
    "sodium_mg": 429.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706550",
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
