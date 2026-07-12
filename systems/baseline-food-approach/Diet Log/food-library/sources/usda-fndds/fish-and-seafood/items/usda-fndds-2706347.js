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
  "id": "usda-fndds-2706347",
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
      "key": "1-crayfish",
      "kind": "unit",
      "label": "1 crayfish"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Crayfish, fried",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 11.7,
    "energy_kcal": 223.0,
    "fat_g": 12.9,
    "fibre_g": 0.5,
    "folate_ug": 45.0,
    "iron_mg": 1.53,
    "magnesium_mg": 25.0,
    "omega3_g": 0.116,
    "phosphorus_mg": 218.0,
    "potassium_mg": 254.0,
    "protein_g": 14.1,
    "salt_g": 0.9675,
    "sat_fat_g": 1.78,
    "sodium_mg": 387.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 4.41,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706347",
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
