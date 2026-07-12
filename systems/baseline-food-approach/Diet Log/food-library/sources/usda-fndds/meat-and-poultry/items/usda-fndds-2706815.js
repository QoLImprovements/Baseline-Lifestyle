/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-burger-king-salad",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-burger-king-salad",
      "kind": "unit",
      "label": "1 Burger King salad"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, breaded, fried, garden salad with cheese, chicken and/or turkey, cheese, lettuce and/or greens, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 6.47,
    "energy_kcal": 123.0,
    "fat_g": 7.9,
    "fibre_g": 1.3,
    "folate_ug": 33.0,
    "iron_mg": 0.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 123.0,
    "potassium_mg": 260.0,
    "protein_g": 6.5,
    "salt_g": 0.5425,
    "sat_fat_g": 2.78,
    "sodium_mg": 217.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 253.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 69.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706815",
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
