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
  "id": "usda-fndds-2706333",
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
  "name": "Calamari, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 3.83,
    "energy_kcal": 155.0,
    "fat_g": 6.25,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.85,
    "magnesium_mg": 41.0,
    "omega3_g": 0.613,
    "phosphorus_mg": 275.0,
    "potassium_mg": 306.0,
    "protein_g": 19.4,
    "salt_g": 0.675,
    "sat_fat_g": 1.63,
    "sodium_mg": 270.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706333",
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
