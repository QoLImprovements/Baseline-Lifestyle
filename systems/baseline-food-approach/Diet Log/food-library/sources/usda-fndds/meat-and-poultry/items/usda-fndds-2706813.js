/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-wendy-s-salad",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
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
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "1-mcdonald-s-salad",
      "kind": "unit",
      "label": "1 McDonald's salad"
    }
  ],
  "name": "Chicken or turkey, breaded, fried, garden salad with bacon and cheese, chicken and/or turkey, bacon, cheese, lettuce and/or greens, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 6.36,
    "energy_kcal": 122.0,
    "fat_g": 7.72,
    "fibre_g": 1.2,
    "folate_ug": 33.0,
    "iron_mg": 0.46,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 117.0,
    "potassium_mg": 271.0,
    "protein_g": 6.78,
    "salt_g": 0.64,
    "sat_fat_g": 2.31,
    "sodium_mg": 256.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 192.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 72.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706813",
  "state": "Fried",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "fried",
    "meat-and-poultry",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
