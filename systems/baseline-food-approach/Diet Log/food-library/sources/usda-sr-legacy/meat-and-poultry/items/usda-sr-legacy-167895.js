/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "rib-without-refuse-yield-from-1-raw-rib-with-refuse-weighing",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "rib-without-refuse-yield-from-1-raw-rib-with-refuse-weighing",
      "kind": "unit",
      "label": "rib without refuse (Yield from 1 raw rib, with refuse, weighing 196g)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, loin, country-style ribs, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 189.0,
    "fat_g": 11.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.85,
    "magnesium_mg": 21.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 193.0,
    "potassium_mg": 318.0,
    "protein_g": 19.3,
    "salt_g": 0.1575,
    "sat_fat_g": 2.37,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167895",
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
