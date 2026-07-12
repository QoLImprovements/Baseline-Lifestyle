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
  "id": "usda-sr-legacy-168358",
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
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Pork, cured, ham, shank, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.41,
    "energy_kcal": 739.0,
    "fat_g": 9.85,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.92,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 243.0,
    "potassium_mg": 339.0,
    "protein_g": 21.6,
    "salt_g": 2.04,
    "sat_fat_g": 3.18,
    "sodium_mg": 816.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168358",
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
