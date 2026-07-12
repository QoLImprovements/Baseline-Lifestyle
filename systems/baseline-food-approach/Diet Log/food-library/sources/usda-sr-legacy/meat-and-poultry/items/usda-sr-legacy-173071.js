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
  "id": "usda-sr-legacy-173071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8\" fat, all grades, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 829.0,
    "fat_g": 9.11,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.59,
    "magnesium_mg": 23.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 229.0,
    "potassium_mg": 299.0,
    "protein_g": 29.1,
    "salt_g": 0.135,
    "sat_fat_g": 3.44,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173071",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
