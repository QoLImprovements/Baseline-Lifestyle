/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 658.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0\" fat, choice, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 231.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.2,
    "magnesium_mg": 22.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 207.0,
    "potassium_mg": 307.0,
    "protein_g": 30.4,
    "salt_g": 0.1575,
    "sat_fat_g": 4.34,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170216",
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
