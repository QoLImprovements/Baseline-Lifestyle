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
  "id": "usda-sr-legacy-168626",
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
      "gramsPerUnit": 68.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Beef, variety meats and by-products, liver, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.13,
    "energy_kcal": 191.0,
    "fat_g": 5.26,
    "fibre_g": 0.0,
    "folate_ug": 253.0,
    "iron_mg": 6.54,
    "magnesium_mg": 21.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 497.0,
    "potassium_mg": 352.0,
    "protein_g": 29.1,
    "salt_g": 0.1975,
    "sat_fat_g": 2.95,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9440.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168626",
  "state": "Cooked",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
