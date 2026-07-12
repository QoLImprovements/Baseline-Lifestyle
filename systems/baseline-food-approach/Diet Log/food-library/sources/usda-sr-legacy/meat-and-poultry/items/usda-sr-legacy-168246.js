/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 1327.0,
      "key": "roast-without-refuse-yield-from-1-raw-roast-with-refuse-weig",
      "kind": "unit",
      "label": "roast without refuse (Yield from 1 raw roast, with refuse, weighing 1817g)"
    }
  ],
  "name": "Pork, fresh, loin, sirloin (chops or roasts), bone-in, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 704.0,
    "fat_g": 8.96,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.82,
    "magnesium_mg": 23.0,
    "omega3_g": 0.046,
    "phosphorus_mg": 209.0,
    "potassium_mg": 336.0,
    "protein_g": 20.5,
    "salt_g": 0.1425,
    "sat_fat_g": 2.98,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168246",
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
