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
  "id": "usda-sr-legacy-168233",
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
      "gramsPerUnit": 81.0,
      "key": "chop-excluding-refuse-yield-from-1-raw-chop-with-refuse-weig",
      "kind": "unit",
      "label": "chop, excluding refuse (yield from 1 raw chop, with refuse, weighing 151 g)"
    }
  ],
  "name": "Pork, fresh, loin, whole, separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 874.0,
    "fat_g": 9.63,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.09,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 249.0,
    "potassium_mg": 425.0,
    "protein_g": 28.6,
    "salt_g": 0.145,
    "sat_fat_g": 3.51,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168233",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
