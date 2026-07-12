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
  "id": "usda-fndds-2708401",
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
  "name": "Quinoa, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 20.2,
    "energy_kcal": 146.0,
    "fat_g": 5.42,
    "fibre_g": 2.7,
    "folate_ug": 40.0,
    "iron_mg": 1.42,
    "magnesium_mg": 61.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 145.0,
    "potassium_mg": 164.0,
    "protein_g": 4.2,
    "salt_g": 0.46,
    "sat_fat_g": 1.77,
    "sodium_mg": 184.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708401",
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
