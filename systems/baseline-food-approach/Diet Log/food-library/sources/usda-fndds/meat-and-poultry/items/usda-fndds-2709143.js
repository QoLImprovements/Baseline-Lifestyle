/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2709143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-meal-6-oz",
      "kind": "unit",
      "label": "1 meal (6 oz)"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-jimmy-dean-flapstick",
      "kind": "unit",
      "label": "1 Jimmy Dean Flapstick"
    }
  ],
  "name": "Pancakes and sausage, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 27.9,
    "energy_kcal": 272.0,
    "fat_g": 13.8,
    "fibre_g": 0.6,
    "folate_ug": 32.0,
    "iron_mg": 1.72,
    "magnesium_mg": 15.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 103.0,
    "potassium_mg": 177.0,
    "protein_g": 9.0,
    "salt_g": 1.435,
    "sat_fat_g": 3.55,
    "sodium_mg": 574.0,
    "sugar_g": 9.61,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709143",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
