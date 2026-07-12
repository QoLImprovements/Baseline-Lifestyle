/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 306.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 1070.0,
    "fat_g": 15.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.81,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 327.0,
    "protein_g": 26.8,
    "salt_g": 0.135,
    "sat_fat_g": 6.2,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168729",
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
