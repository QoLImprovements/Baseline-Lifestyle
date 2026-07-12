/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-yield-from-1-raw-roast-with-refuse-weighing-504g",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 505.0,
      "key": "roast-yield-from-1-raw-roast-with-refuse-weighing-504g",
      "kind": "unit",
      "label": "roast (Yield from 1 raw roast, with refuse, weighing 504g)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, loin, tenderloin, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 502.0,
    "fat_g": 3.53,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.97,
    "magnesium_mg": 27.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 243.0,
    "potassium_mg": 393.0,
    "protein_g": 20.6,
    "salt_g": 0.13,
    "sat_fat_g": 1.18,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168312",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
