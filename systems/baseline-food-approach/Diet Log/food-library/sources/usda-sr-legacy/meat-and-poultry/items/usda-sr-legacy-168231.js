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
  "id": "usda-sr-legacy-168231",
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
      "gramsPerUnit": 80.0,
      "key": "chop-excluding-refuse-yield-from-1-raw-chop-with-refuse-weig",
      "kind": "unit",
      "label": "chop, excluding refuse (yield from 1 raw chop, with refuse, weighing 151 g)"
    }
  ],
  "name": "Pork, fresh, loin, whole, separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 854.0,
    "fat_g": 9.12,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.13,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 387.0,
    "protein_g": 28.6,
    "salt_g": 0.125,
    "sat_fat_g": 3.38,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168231",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
