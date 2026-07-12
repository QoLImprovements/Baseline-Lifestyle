/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cracker-sandwich",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174984",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cracker-sandwich",
      "kind": "unit",
      "label": "cracker, sandwich"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, standard snack-type, sandwich, with peanut butter filling",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 58.4,
    "energy_kcal": 2070.0,
    "fat_g": 24.5,
    "fibre_g": 2.3,
    "folate_ug": 86.0,
    "iron_mg": 2.77,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 274.0,
    "potassium_mg": 215.0,
    "protein_g": 11.5,
    "salt_g": 2.0025,
    "sat_fat_g": 4.8,
    "sodium_mg": 801.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174984",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
