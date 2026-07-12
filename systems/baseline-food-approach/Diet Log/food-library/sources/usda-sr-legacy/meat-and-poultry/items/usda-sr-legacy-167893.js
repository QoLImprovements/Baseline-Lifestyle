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
  "id": "usda-sr-legacy-167893",
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
      "gramsPerUnit": 66.0,
      "key": "chop-excluding-refuse-yield-from-1-raw-chop-with-refuse-weig",
      "kind": "unit",
      "label": "chop, excluding refuse (yield from 1 raw chop, with refuse, weighing 113 g)"
    }
  ],
  "name": "Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 937.0,
    "fat_g": 11.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.78,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 454.0,
    "protein_g": 27.7,
    "salt_g": 0.13,
    "sat_fat_g": 4.3,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167893",
  "state": "Fried",
  "subcategory": "Pork Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
