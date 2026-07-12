/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    },
    {
      "gramsPerUnit": 1867.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Pork, cured, ham -- water added, whole, boneless, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.54,
    "energy_kcal": 126.0,
    "fat_g": 5.48,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.82,
    "magnesium_mg": 19.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 268.0,
    "potassium_mg": 313.0,
    "protein_g": 17.8,
    "salt_g": 2.95,
    "sat_fat_g": 1.79,
    "sodium_mg": 1180.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168349",
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
