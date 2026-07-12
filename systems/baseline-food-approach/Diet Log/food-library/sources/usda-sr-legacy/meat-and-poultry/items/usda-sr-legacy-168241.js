/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168241",
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
      "gramsPerUnit": 900.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Pork, fresh, loin, center loin (roasts), bone-in, separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 0.0,
    "energy_kcal": 811.0,
    "fat_g": 7.95,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.93,
    "magnesium_mg": 21.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 223.0,
    "potassium_mg": 370.0,
    "protein_g": 28.6,
    "salt_g": 0.215,
    "sat_fat_g": 2.93,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168241",
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
