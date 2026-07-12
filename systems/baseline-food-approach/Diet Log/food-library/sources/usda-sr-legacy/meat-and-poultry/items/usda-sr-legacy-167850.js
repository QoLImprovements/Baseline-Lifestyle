/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-without-refuse-yield-from-1-cooked-steak-with-refuse-w",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "steak-without-refuse-yield-from-1-cooked-steak-with-refuse-w",
      "kind": "unit",
      "label": "steak without refuse (Yield from 1 cooked steak, with refuse, weighing 249g)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 267.0,
    "fat_g": 17.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.75,
    "magnesium_mg": 23.0,
    "omega3_g": 0.077,
    "phosphorus_mg": 208.0,
    "potassium_mg": 305.0,
    "protein_g": 25.1,
    "salt_g": 0.145,
    "sat_fat_g": 6.58,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167850",
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
