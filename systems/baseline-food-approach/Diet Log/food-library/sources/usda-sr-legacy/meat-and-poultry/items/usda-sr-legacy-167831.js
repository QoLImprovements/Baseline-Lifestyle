/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chop-without-refuse-yield-from-1-cooked-chop-with-refuse-wei",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "chop-without-refuse-yield-from-1-cooked-chop-with-refuse-wei",
      "kind": "unit",
      "label": "chop without refuse (Yield from 1 cooked chop, with refuse, weighing 172g)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 222.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 24.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 209.0,
    "potassium_mg": 329.0,
    "protein_g": 24.4,
    "salt_g": 0.1375,
    "sat_fat_g": 4.49,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167831",
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
