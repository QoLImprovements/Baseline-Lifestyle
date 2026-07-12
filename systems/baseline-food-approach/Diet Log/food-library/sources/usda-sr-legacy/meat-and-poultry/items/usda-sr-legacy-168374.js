/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-grilled-patties",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-grilled-patties",
      "kind": "unit",
      "label": "3 oz grilled patties"
    }
  ],
  "name": "Pork, ground, 84% lean / 16% fat, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 301.0,
    "fat_g": 21.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.16,
    "magnesium_mg": 22.0,
    "omega3_g": 0.174,
    "phosphorus_mg": 221.0,
    "potassium_mg": 345.0,
    "protein_g": 27.1,
    "salt_g": 0.2225,
    "sat_fat_g": 7.45,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168374",
  "state": "Grilled",
  "subcategory": "Pork Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
