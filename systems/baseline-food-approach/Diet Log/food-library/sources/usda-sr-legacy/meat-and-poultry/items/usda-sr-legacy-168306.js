/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "rib-without-refuse-yield-from-1-cooked-rib-with-refuse-weigh",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168306",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "rib-without-refuse-yield-from-1-cooked-rib-with-refuse-weigh",
      "kind": "unit",
      "label": "rib without refuse (yield from 1 cooked rib, with refuse, weighing 141g)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, loin, country-style ribs, separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 1030.0,
    "fat_g": 14.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.39,
    "magnesium_mg": 23.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 208.0,
    "potassium_mg": 297.0,
    "protein_g": 27.7,
    "salt_g": 0.15,
    "sat_fat_g": 5.09,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168306",
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
