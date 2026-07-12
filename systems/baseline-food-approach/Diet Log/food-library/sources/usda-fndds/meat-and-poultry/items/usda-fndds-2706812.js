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
  "id": "usda-fndds-2706812",
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
      "gramsPerUnit": 321.0,
      "key": "1-mcdonald-s-salad",
      "kind": "unit",
      "label": "1 McDonald's salad"
    },
    {
      "gramsPerUnit": 321.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 321.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey garden salad with bacon and cheese, chicken and/or turkey, bacon, cheese, lettuce and/or greens, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 3.0,
    "energy_kcal": 106.0,
    "fat_g": 5.61,
    "fibre_g": 0.9,
    "folate_ug": 31.0,
    "iron_mg": 0.37,
    "magnesium_mg": 23.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 135.0,
    "potassium_mg": 269.0,
    "protein_g": 11.0,
    "salt_g": 0.57,
    "sat_fat_g": 2.56,
    "sodium_mg": 228.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 189.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 64.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706812",
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
