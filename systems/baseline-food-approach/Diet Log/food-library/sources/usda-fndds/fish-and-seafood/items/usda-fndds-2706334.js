/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Shellfish",
  "id": "usda-fndds-2706334",
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
      "gramsPerUnit": 15.0,
      "key": "1-item",
      "kind": "unit",
      "label": "1 item"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Calamari, fried",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 14.1,
    "energy_kcal": 234.0,
    "fat_g": 13.2,
    "fibre_g": 0.5,
    "folate_ug": 27.0,
    "iron_mg": 1.41,
    "magnesium_mg": 30.0,
    "omega3_g": 0.374,
    "phosphorus_mg": 191.0,
    "potassium_mg": 211.0,
    "protein_g": 13.8,
    "salt_g": 0.9425,
    "sat_fat_g": 1.94,
    "sodium_mg": 377.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 3.16,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706334",
  "state": "Fried",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "fried",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
