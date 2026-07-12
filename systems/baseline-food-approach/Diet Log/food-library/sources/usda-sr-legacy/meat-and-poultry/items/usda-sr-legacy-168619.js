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
  "id": "usda-sr-legacy-168619",
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
      "gramsPerUnit": 461.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8\" fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 160.0,
    "fat_g": 7.27,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.65,
    "magnesium_mg": 11.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 196.0,
    "potassium_mg": 263.0,
    "protein_g": 22.1,
    "salt_g": 0.0875,
    "sat_fat_g": 2.78,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168619",
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
