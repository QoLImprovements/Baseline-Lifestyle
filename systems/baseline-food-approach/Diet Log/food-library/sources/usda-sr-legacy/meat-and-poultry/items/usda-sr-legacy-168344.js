/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb-rump",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-rump",
      "kind": "unit",
      "label": "lb rump"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-rump",
      "kind": "unit",
      "label": "3 oz rump"
    }
  ],
  "name": "Pork, cured, ham with natural juices, rump, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.43,
    "energy_kcal": 836.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.94,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 231.0,
    "potassium_mg": 278.0,
    "protein_g": 19.7,
    "salt_g": 2.095,
    "sat_fat_g": 4.37,
    "sodium_mg": 838.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168344",
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
