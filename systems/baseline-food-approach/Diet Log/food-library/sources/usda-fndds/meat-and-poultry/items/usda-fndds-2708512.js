/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-taco-salad",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 273.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 363.0,
      "key": "1-taco-salad-ns-as-to-size",
      "kind": "unit",
      "label": "1 taco salad, NS as to size"
    },
    {
      "gramsPerUnit": 363.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Taco or tostada salad with chicken and sour cream",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 15.0,
    "energy_kcal": 171.0,
    "fat_g": 9.26,
    "fibre_g": 2.5,
    "folate_ug": 36.0,
    "iron_mg": 1.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 124.0,
    "potassium_mg": 212.0,
    "protein_g": 7.24,
    "salt_g": 0.705,
    "sat_fat_g": 3.32,
    "sodium_mg": 282.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708512",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
