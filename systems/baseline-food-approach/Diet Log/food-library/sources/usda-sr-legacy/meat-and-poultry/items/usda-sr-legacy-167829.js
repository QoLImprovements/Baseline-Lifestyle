/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167829",
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
      "gramsPerUnit": 178.0,
      "key": "chop-without-refuse-yield-from-1-raw-chop-with-refuse-weighi",
      "kind": "unit",
      "label": "chop without refuse (Yield from 1 raw chop, with refuse, weighing 259g)"
    }
  ],
  "name": "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 533.0,
    "fat_g": 3.71,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.65,
    "magnesium_mg": 26.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 220.0,
    "potassium_mg": 362.0,
    "protein_g": 22.0,
    "salt_g": 0.145,
    "sat_fat_g": 1.1,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167829",
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
