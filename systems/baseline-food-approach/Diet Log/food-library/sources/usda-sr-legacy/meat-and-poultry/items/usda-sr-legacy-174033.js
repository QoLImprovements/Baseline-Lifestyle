/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-174033",
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
      "gramsPerUnit": 83.0,
      "key": "patty-yield-from-1-4-lb-raw-meat",
      "kind": "unit",
      "label": "patty ( yield from 1/4 lb raw meat )"
    }
  ],
  "name": "Beef, ground, 85% lean meat / 15% fat, patty, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 969.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.68,
    "magnesium_mg": 22.0,
    "omega3_g": 0.067,
    "phosphorus_mg": 211.0,
    "potassium_mg": 349.0,
    "protein_g": 24.6,
    "salt_g": 0.1975,
    "sat_fat_g": 5.33,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174033",
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
