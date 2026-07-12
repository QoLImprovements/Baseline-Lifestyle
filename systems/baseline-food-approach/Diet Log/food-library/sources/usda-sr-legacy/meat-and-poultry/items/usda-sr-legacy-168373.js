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
  "id": "usda-sr-legacy-168373",
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
  "name": "Pork, ground, 72% lean / 28% fat, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.08,
    "energy_kcal": 1580.0,
    "fat_g": 31.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.21,
    "magnesium_mg": 18.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 181.0,
    "potassium_mg": 275.0,
    "protein_g": 22.6,
    "salt_g": 0.2275,
    "sat_fat_g": 10.8,
    "sodium_mg": 91.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168373",
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
