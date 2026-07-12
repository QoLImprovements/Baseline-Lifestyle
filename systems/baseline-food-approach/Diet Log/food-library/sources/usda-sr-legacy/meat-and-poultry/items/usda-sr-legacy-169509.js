/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169509",
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
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8\" fat, all grades, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 1060.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.39,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 295.0,
    "protein_g": 19.3,
    "salt_g": 0.1225,
    "sat_fat_g": 7.69,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169509",
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
