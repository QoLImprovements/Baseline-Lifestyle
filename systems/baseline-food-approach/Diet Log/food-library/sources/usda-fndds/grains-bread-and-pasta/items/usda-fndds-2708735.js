/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    }
  ],
  "name": "Turnover or hot pocket, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 27.0,
    "energy_kcal": 198.0,
    "fat_g": 7.78,
    "fibre_g": 1.6,
    "folate_ug": 54.0,
    "iron_mg": 1.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 69.0,
    "potassium_mg": 126.0,
    "protein_g": 5.07,
    "salt_g": 1.26,
    "sat_fat_g": 2.11,
    "sodium_mg": 504.0,
    "sugar_g": 3.24,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708735",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
