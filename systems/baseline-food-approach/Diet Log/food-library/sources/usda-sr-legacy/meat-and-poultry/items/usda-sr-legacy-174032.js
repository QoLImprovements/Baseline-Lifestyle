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
  "id": "usda-sr-legacy-174032",
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
      "gramsPerUnit": 77.0,
      "key": "patty-yield-from-1-4-lb-raw-meat",
      "kind": "unit",
      "label": "patty (yield from 1/4 lb raw meat)"
    }
  ],
  "name": "Beef, ground, 85% lean meat / 15% fat, patty, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 1040.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 198.0,
    "potassium_mg": 318.0,
    "protein_g": 25.9,
    "salt_g": 0.18,
    "sat_fat_g": 5.9,
    "sodium_mg": 72.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174032",
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
