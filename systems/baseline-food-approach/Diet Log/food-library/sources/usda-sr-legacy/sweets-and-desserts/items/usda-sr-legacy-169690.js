/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz-approx-60-pcs",
  "description": "Sweets",
  "id": "usda-sr-legacy-169690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-approx-60-pcs",
      "kind": "unit",
      "label": "oz (approx 60 pcs)"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "cup-mini-chips",
      "kind": "unit",
      "label": "cup mini chips"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup-large-chips",
      "kind": "unit",
      "label": "cup large chips"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-chips-6-oz-package",
      "kind": "unit",
      "label": "cup chips (6 oz package)"
    }
  ],
  "name": "Candies, semisweet chocolate, made with butter",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 63.4,
    "energy_kcal": 2000.0,
    "fat_g": 29.7,
    "fibre_g": 5.9,
    "folate_ug": 3.0,
    "iron_mg": 3.13,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 365.0,
    "protein_g": 4.2,
    "salt_g": 0.0275,
    "sat_fat_g": 17.5,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169690",
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
