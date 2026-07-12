/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-spiral-slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-spiral-slice",
      "kind": "unit",
      "label": "3 oz spiral slice"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-spiral-slice",
      "kind": "unit",
      "label": "lb spiral slice"
    }
  ],
  "name": "Pork, cured, ham with natural juices, spiral slice, boneless, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 1.18,
    "energy_kcal": 129.0,
    "fat_g": 5.75,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.75,
    "magnesium_mg": 19.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 276.0,
    "potassium_mg": 310.0,
    "protein_g": 18.7,
    "salt_g": 2.2025,
    "sat_fat_g": 1.83,
    "sodium_mg": 881.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168341",
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
