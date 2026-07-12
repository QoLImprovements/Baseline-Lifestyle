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
  "id": "usda-sr-legacy-168330",
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
      "gramsPerUnit": 445.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pork, cured, ham with natural juices, slice, bone-in, separable lean only, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 150.0,
    "fat_g": 4.38,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.2,
    "magnesium_mg": 23.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 291.0,
    "potassium_mg": 358.0,
    "protein_g": 27.8,
    "salt_g": 2.0875,
    "sat_fat_g": 1.11,
    "sodium_mg": 835.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168330",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
