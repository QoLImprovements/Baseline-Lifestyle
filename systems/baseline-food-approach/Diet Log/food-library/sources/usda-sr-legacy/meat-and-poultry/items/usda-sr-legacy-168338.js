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
  "id": "usda-sr-legacy-168338",
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
    }
  ],
  "name": "Pork, cured, ham with natural juices, shank, bone-in, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.3,
    "energy_kcal": 130.0,
    "fat_g": 3.33,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.1,
    "magnesium_mg": 20.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 250.0,
    "potassium_mg": 299.0,
    "protein_g": 25.1,
    "salt_g": 2.0225,
    "sat_fat_g": 1.05,
    "sodium_mg": 809.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168338",
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
