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
  "id": "usda-fndds-2706348",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-crayfish",
      "kind": "unit",
      "label": "1 crayfish"
    }
  ],
  "name": "Crayfish, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.0,
    "energy_kcal": 97.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.06,
    "magnesium_mg": 34.0,
    "omega3_g": 0.193,
    "phosphorus_mg": 324.0,
    "potassium_mg": 382.0,
    "protein_g": 20.2,
    "salt_g": 0.1825,
    "sat_fat_g": 0.201,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 3.61,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706348",
  "state": "Cooked",
  "subcategory": "Shellfish",
  "tags": [
    "cooked",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
