/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 432.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0\" fat, all grades, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.05,
    "energy_kcal": 708.0,
    "fat_g": 10.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.45,
    "magnesium_mg": 21.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 185.0,
    "potassium_mg": 307.0,
    "protein_g": 19.7,
    "salt_g": 0.2125,
    "sat_fat_g": 4.31,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170796",
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
