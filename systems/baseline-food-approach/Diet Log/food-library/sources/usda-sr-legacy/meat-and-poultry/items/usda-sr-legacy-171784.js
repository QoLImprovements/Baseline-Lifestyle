/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-171784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Beef, chuck, clod roast, separable lean and fat, trimmed to 0\" fat, select, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 818.0,
    "fat_g": 8.76,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 3.09,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 372.0,
    "protein_g": 27.3,
    "salt_g": 0.18,
    "sat_fat_g": 3.35,
    "sodium_mg": 72.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171784",
  "state": "Roasted",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
