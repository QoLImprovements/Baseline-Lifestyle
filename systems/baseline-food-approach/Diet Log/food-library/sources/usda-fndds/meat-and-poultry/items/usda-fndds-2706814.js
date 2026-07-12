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
  "id": "usda-fndds-2706814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-burger-king-salad",
      "kind": "unit",
      "label": "1 Burger King salad"
    }
  ],
  "name": "Chicken or turkey garden salad with cheese, chicken and/or turkey, cheese, lettuce and/or greens, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 3.02,
    "energy_kcal": 93.0,
    "fat_g": 4.52,
    "fibre_g": 0.9,
    "folate_ug": 32.0,
    "iron_mg": 0.35,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 127.0,
    "potassium_mg": 260.0,
    "protein_g": 10.3,
    "salt_g": 0.44,
    "sat_fat_g": 2.2,
    "sodium_mg": 176.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 194.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 66.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706814",
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
