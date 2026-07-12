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
  "id": "usda-sr-legacy-172153",
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
      "gramsPerUnit": 1601.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Beef, rib eye roast, boneless, lip-on, separable lean and fat, trimmed to 1/8\" fat, all grades, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 292.0,
    "fat_g": 21.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.95,
    "magnesium_mg": 21.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 155.0,
    "potassium_mg": 286.0,
    "protein_g": 24.3,
    "salt_g": 0.13,
    "sat_fat_g": 9.42,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172153",
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
