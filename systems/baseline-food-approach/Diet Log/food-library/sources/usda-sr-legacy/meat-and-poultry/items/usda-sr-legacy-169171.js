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
  "id": "usda-sr-legacy-169171",
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
      "gramsPerUnit": 3170.0,
      "key": "roast-shank",
      "kind": "unit",
      "label": "roast shank"
    }
  ],
  "name": "Pork, cured, ham with natural juices, shank, bone-in, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.33,
    "energy_kcal": 799.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.11,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 244.0,
    "potassium_mg": 424.0,
    "protein_g": 22.9,
    "salt_g": 2.0025,
    "sat_fat_g": 3.54,
    "sodium_mg": 801.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169171",
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
