/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-shrimp",
  "description": "Shellfish",
  "id": "usda-fndds-2706458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-shrimp",
      "kind": "unit",
      "label": "1 shrimp"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp scampi",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 2.27,
    "energy_kcal": 192.0,
    "fat_g": 13.0,
    "fibre_g": 0.2,
    "folate_ug": 20.0,
    "iron_mg": 0.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.163,
    "phosphorus_mg": 278.0,
    "potassium_mg": 156.0,
    "protein_g": 15.4,
    "salt_g": 0.42,
    "sat_fat_g": 4.26,
    "sodium_mg": 168.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 2.84,
    "vitamin_k_ug": 45.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706458",
  "state": "Unspecified",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
