/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Alfredo sauce with seafood",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 1.99,
    "energy_kcal": 145.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.47,
    "magnesium_mg": 10.0,
    "omega3_g": 0.083,
    "phosphorus_mg": 89.0,
    "potassium_mg": 98.0,
    "protein_g": 5.91,
    "salt_g": 1.3525,
    "sat_fat_g": 6.97,
    "sodium_mg": 541.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705815",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
