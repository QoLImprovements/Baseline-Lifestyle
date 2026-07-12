/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar-1-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    }
  ],
  "name": "Snacks, granola bars, soft, uncoated, peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 64.4,
    "energy_kcal": 1780.0,
    "fat_g": 15.8,
    "fibre_g": 4.3,
    "folate_ug": 32.0,
    "iron_mg": 2.13,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 291.0,
    "protein_g": 10.5,
    "salt_g": 1.0225,
    "sat_fat_g": 3.65,
    "sodium_mg": 409.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167955",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
