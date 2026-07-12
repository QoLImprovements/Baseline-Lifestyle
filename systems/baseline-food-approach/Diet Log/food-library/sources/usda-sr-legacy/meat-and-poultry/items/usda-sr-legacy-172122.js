/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "medallion",
  "description": "Beef Products",
  "id": "usda-sr-legacy-172122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "medallion",
      "kind": "unit",
      "label": "medallion"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0\" fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 606.0,
    "fat_g": 6.36,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.01,
    "magnesium_mg": 23.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 200.0,
    "potassium_mg": 339.0,
    "protein_g": 20.5,
    "salt_g": 0.1475,
    "sat_fat_g": 2.33,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172122",
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
