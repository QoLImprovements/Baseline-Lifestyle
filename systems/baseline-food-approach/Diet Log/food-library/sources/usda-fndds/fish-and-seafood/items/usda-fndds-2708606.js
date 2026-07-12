/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-fajita",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-fajita",
      "kind": "unit",
      "label": "1 fajita"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fajita, shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 18.4,
    "energy_kcal": 189.0,
    "fat_g": 8.92,
    "fibre_g": 1.5,
    "folate_ug": 44.0,
    "iron_mg": 1.32,
    "magnesium_mg": 19.0,
    "omega3_g": 0.058,
    "phosphorus_mg": 171.0,
    "potassium_mg": 145.0,
    "protein_g": 8.33,
    "salt_g": 1.14,
    "sat_fat_g": 1.93,
    "sodium_mg": 456.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 23.9,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708606",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "fish-and-seafood",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
