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
  "id": "usda-sr-legacy-170205",
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
      "gramsPerUnit": 473.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0\" fat, all grades, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.49,
    "energy_kcal": 709.0,
    "fat_g": 9.99,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.42,
    "magnesium_mg": 20.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 181.0,
    "potassium_mg": 321.0,
    "protein_g": 19.4,
    "salt_g": 0.1925,
    "sat_fat_g": 4.13,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170205",
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
