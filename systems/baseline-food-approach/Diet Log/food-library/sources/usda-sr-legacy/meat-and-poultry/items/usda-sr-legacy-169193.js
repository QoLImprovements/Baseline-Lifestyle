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
  "id": "usda-sr-legacy-169193",
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
  "name": "Pork, ground, 96% lean / 4% fat, cooked, crumbles",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 187.0,
    "fat_g": 7.15,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.05,
    "magnesium_mg": 27.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 261.0,
    "potassium_mg": 428.0,
    "protein_g": 30.6,
    "salt_g": 0.21,
    "sat_fat_g": 1.95,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169193",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
