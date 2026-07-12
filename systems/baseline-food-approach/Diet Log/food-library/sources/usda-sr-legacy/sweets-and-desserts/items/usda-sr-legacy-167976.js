/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup-mini-chips",
  "description": "Sweets",
  "id": "usda-sr-legacy-167976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "cup-mini-chips",
      "kind": "unit",
      "label": "cup mini chips"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup-chips-6-oz-package",
      "kind": "unit",
      "label": "cup chips (6 oz package)"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-approx-60-pcs",
      "kind": "unit",
      "label": "oz (approx 60 pcs)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup-large-chips",
      "kind": "unit",
      "label": "cup large chips"
    }
  ],
  "name": "Candies, semisweet chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 63.9,
    "energy_kcal": 480.0,
    "fat_g": 30.0,
    "fibre_g": 5.9,
    "folate_ug": 13.0,
    "iron_mg": 3.13,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 365.0,
    "protein_g": 4.2,
    "salt_g": 0.0275,
    "sat_fat_g": 17.8,
    "sodium_mg": 11.0,
    "sugar_g": 54.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167976",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
