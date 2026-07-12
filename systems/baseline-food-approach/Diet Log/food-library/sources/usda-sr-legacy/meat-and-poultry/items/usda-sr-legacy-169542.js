/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8\" fat, all grades, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 247.0,
    "fat_g": 18.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.42,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 302.0,
    "protein_g": 19.6,
    "salt_g": 0.125,
    "sat_fat_g": 8.41,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169542",
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
