/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-salad",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 314.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 314.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 314.0,
      "key": "1-mcdonald-s-salad",
      "kind": "unit",
      "label": "1 McDonald's salad"
    }
  ],
  "name": "Chicken or turkey, breaded, fried, caesar garden salad, chicken and/or turkey, lettuce, tomatoes, cheese, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 7.08,
    "energy_kcal": 115.0,
    "fat_g": 6.85,
    "fibre_g": 1.2,
    "folate_ug": 34.0,
    "iron_mg": 0.53,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 115.0,
    "potassium_mg": 281.0,
    "protein_g": 6.31,
    "salt_g": 0.6175,
    "sat_fat_g": 1.53,
    "sodium_mg": 247.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 8.5,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 84.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706819",
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
