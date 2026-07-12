/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 920.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    }
  ],
  "name": "Pork, cured, ham with natural juices, spiral slice, boneless, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 1.06,
    "energy_kcal": 139.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.83,
    "magnesium_mg": 22.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 308.0,
    "potassium_mg": 345.0,
    "protein_g": 22.2,
    "salt_g": 2.4425,
    "sat_fat_g": 0.95,
    "sodium_mg": 977.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168354",
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
