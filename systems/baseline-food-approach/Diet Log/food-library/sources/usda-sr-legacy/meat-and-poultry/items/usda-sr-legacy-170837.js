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
  "id": "usda-sr-legacy-170837",
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
      "gramsPerUnit": 2259.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Beef, rib eye roast, bone-in, lip-on, separable lean only, trimmed to 1/8\" fat, select, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 915.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.35,
    "magnesium_mg": 24.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 170.0,
    "potassium_mg": 295.0,
    "protein_g": 27.0,
    "salt_g": 0.175,
    "sat_fat_g": 4.74,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170837",
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
