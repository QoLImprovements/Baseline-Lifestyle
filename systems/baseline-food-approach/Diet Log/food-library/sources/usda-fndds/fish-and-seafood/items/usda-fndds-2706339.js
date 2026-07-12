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
  "id": "usda-fndds-2706339",
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
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Clams, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 6.74,
    "energy_kcal": 143.0,
    "fat_g": 5.2,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 1.95,
    "magnesium_mg": 21.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 217.0,
    "potassium_mg": 55.0,
    "protein_g": 16.1,
    "salt_g": 0.4975,
    "sat_fat_g": 0.912,
    "sodium_mg": 199.0,
    "sugar_g": 0.05,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706339",
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
