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
  "id": "usda-sr-legacy-168334",
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
      "gramsPerUnit": 1497.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Pork, cured, ham with natural juices, whole, boneless, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.84,
    "energy_kcal": 472.0,
    "fat_g": 3.01,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.85,
    "magnesium_mg": 22.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 318.0,
    "potassium_mg": 367.0,
    "protein_g": 20.6,
    "salt_g": 2.95,
    "sat_fat_g": 1.04,
    "sodium_mg": 1180.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168334",
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
