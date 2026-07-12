/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167822",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    }
  ],
  "name": "Pork, fresh, loin, blade (chops or roasts), bone-in, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 0.0,
    "energy_kcal": 813.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 207.0,
    "potassium_mg": 288.0,
    "protein_g": 19.6,
    "salt_g": 0.1725,
    "sat_fat_g": 4.27,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167822",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
