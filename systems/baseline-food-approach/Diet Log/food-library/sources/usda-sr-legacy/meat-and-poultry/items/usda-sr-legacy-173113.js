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
  "id": "usda-sr-legacy-173113",
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
      "gramsPerUnit": 139.0,
      "key": "portion-yield-from-1-2-lb-raw-meat",
      "kind": "unit",
      "label": "portion (yield from 1/2 lb raw meat )"
    }
  ],
  "name": "Beef, ground, 97% lean meat /3% fat, patty, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 603.0,
    "fat_g": 3.65,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.89,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 382.0,
    "protein_g": 26.0,
    "salt_g": 0.1725,
    "sat_fat_g": 1.8,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173113",
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
