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
  "id": "usda-sr-legacy-167827",
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
      "gramsPerUnit": 157.0,
      "key": "chop-without-refuse-yield-from-1-cooked-chop-with-refuse-wei",
      "kind": "unit",
      "label": "chop without refuse (Yield from 1 cooked chop, with refuse, weighing 209g)"
    }
  ],
  "name": "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 875.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.79,
    "magnesium_mg": 25.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 220.0,
    "potassium_mg": 344.0,
    "protein_g": 25.6,
    "salt_g": 0.1375,
    "sat_fat_g": 3.52,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167827",
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
