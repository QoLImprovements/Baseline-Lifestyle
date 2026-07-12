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
  "id": "usda-sr-legacy-169192",
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
  "name": "Pork, ground, 84% lean / 16% fat, cooked, crumbles",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.58,
    "energy_kcal": 1210.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.1,
    "magnesium_mg": 23.0,
    "omega3_g": 0.147,
    "phosphorus_mg": 226.0,
    "potassium_mg": 354.0,
    "protein_g": 26.7,
    "salt_g": 0.2225,
    "sat_fat_g": 6.63,
    "sodium_mg": 89.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169192",
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
