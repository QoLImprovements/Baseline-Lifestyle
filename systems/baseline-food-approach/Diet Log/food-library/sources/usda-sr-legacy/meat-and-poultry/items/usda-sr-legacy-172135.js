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
  "id": "usda-sr-legacy-172135",
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
      "gramsPerUnit": 236.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0\" fat, all grades, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 760.0,
    "fat_g": 7.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.99,
    "magnesium_mg": 25.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 233.0,
    "potassium_mg": 363.0,
    "protein_g": 27.5,
    "salt_g": 0.145,
    "sat_fat_g": 2.54,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172135",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
