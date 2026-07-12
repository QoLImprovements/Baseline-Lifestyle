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
  "id": "usda-sr-legacy-167896",
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
      "gramsPerUnit": 86.0,
      "key": "rib-without-refuse-yield-from-1-cooked-rib-with-refuse-weigh",
      "kind": "unit",
      "label": "rib without refuse (Yield from 1 cooked rib, with refuse, weighing 140g)"
    }
  ],
  "name": "Pork, fresh, loin, country-style ribs, separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.0,
    "energy_kcal": 1140.0,
    "fat_g": 17.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.34,
    "magnesium_mg": 23.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 202.0,
    "potassium_mg": 288.0,
    "protein_g": 26.5,
    "salt_g": 0.145,
    "sat_fat_g": 6.3,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167896",
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
