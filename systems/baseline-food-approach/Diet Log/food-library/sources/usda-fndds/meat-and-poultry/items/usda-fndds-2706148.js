/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-diced-cooked",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-dove-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 dove (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Dove, fried",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.46,
    "energy_kcal": 223.0,
    "fat_g": 13.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 5.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 321.0,
    "potassium_mg": 250.0,
    "protein_g": 23.1,
    "salt_g": 0.4925,
    "sat_fat_g": 3.93,
    "sodium_mg": 197.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706148",
  "state": "Fried",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "fried",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
