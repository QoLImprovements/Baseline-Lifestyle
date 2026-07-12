/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    }
  ],
  "name": "Pork, cured, ham -- water added, slice, boneless, separable lean only, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.75,
    "energy_kcal": 119.0,
    "fat_g": 4.09,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.86,
    "magnesium_mg": 21.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 284.0,
    "potassium_mg": 337.0,
    "protein_g": 18.8,
    "salt_g": 3.05,
    "sat_fat_g": 1.4,
    "sodium_mg": 1220.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168329",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
