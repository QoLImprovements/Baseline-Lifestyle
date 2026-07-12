/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 638.0,
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
  "name": "Pork, fresh, loin, sirloin (roasts), boneless, separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 743.0,
    "fat_g": 5.31,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.66,
    "magnesium_mg": 28.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 311.0,
    "potassium_mg": 408.0,
    "protein_g": 30.4,
    "salt_g": 0.165,
    "sat_fat_g": 1.8,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168311",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
