/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 346.0,
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
      "gramsPerUnit": 346.0,
      "key": "1-salad",
      "kind": "unit",
      "label": "1 salad"
    },
    {
      "gramsPerUnit": 346.0,
      "key": "1-wendy-s-salad",
      "kind": "unit",
      "label": "1 Wendy's salad"
    }
  ],
  "name": "Asian chicken or turkey garden salad with crispy noodles, chicken and/or turkey, lettuce, fruit, nuts, crispy noodles, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 8.11,
    "energy_kcal": 116.0,
    "fat_g": 5.26,
    "fibre_g": 1.8,
    "folate_ug": 36.0,
    "iron_mg": 0.82,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 288.0,
    "protein_g": 10.2,
    "salt_g": 0.4175,
    "sat_fat_g": 0.8,
    "sodium_mg": 167.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 62.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706817",
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
