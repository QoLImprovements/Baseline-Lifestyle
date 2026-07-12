/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Quinoa, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 21.2,
    "energy_kcal": 120.0,
    "fat_g": 1.91,
    "fibre_g": 2.8,
    "folate_ug": 42.0,
    "iron_mg": 1.48,
    "magnesium_mg": 64.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 151.0,
    "potassium_mg": 171.0,
    "protein_g": 4.38,
    "salt_g": 0.4075,
    "sat_fat_g": 0.23,
    "sodium_mg": 163.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708400",
  "state": "Unspecified",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "grains-bread-and-pasta",
    "pasta-noodles-cooked-grains",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
