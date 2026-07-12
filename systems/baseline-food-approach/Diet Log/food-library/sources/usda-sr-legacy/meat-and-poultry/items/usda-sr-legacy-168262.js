/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168262",
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
      "gramsPerUnit": 147.0,
      "key": "steak-excluding-refuse-yield-from-1-raw-steak-with-refuse-we",
      "kind": "unit",
      "label": "steak, excluding refuse (yield from 1 raw steak, with refuse, weighing 300 g)"
    }
  ],
  "name": "Pork, fresh, shoulder, blade, boston (steaks), separable lean only, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 950.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.56,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 343.0,
    "protein_g": 26.7,
    "salt_g": 0.185,
    "sat_fat_g": 4.45,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168262",
  "state": "Grilled",
  "subcategory": "Pork Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
