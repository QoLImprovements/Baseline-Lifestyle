/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cracker-sandwich",
      "kind": "unit",
      "label": "cracker, sandwich"
    }
  ],
  "name": "Crackers, wheat, sandwich, with peanut butter filling",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 53.8,
    "energy_kcal": 2070.0,
    "fat_g": 26.7,
    "fibre_g": 4.4,
    "folate_ug": 70.0,
    "iron_mg": 2.67,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 347.0,
    "potassium_mg": 297.0,
    "protein_g": 13.5,
    "salt_g": 2.0175,
    "sat_fat_g": 4.6,
    "sodium_mg": 807.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172748",
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
