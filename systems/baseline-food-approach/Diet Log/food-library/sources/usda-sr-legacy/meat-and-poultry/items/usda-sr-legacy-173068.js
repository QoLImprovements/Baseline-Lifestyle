/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz-4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz-4-oz",
      "kind": "unit",
      "label": "4 oz (4 oz)"
    }
  ],
  "name": "Beef, Australian, imported, grass-fed, ground, 85% lean / 15% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 239.0,
    "fat_g": 18.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.79,
    "magnesium_mg": 0.0,
    "omega3_g": 0.141,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 17.7,
    "salt_g": 0.155,
    "sat_fat_g": 7.94,
    "sodium_mg": 62.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173068",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
