/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-mcdonald-s-salad",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "1-mcdonald-s-salad",
      "kind": "unit",
      "label": "1 McDonald's salad"
    },
    {
      "gramsPerUnit": 261.0,
      "key": "1-wendy-s-salad",
      "kind": "unit",
      "label": "1 Wendy's salad"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 286.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey caesar garden salad, chicken and/or turkey, lettuce, tomato, cheese, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 2.99,
    "energy_kcal": 63.0,
    "fat_g": 1.94,
    "fibre_g": 1.0,
    "folate_ug": 35.0,
    "iron_mg": 0.42,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 98.0,
    "potassium_mg": 290.0,
    "protein_g": 8.52,
    "salt_g": 0.6625,
    "sat_fat_g": 0.752,
    "sodium_mg": 265.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 182.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 88.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706818",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
