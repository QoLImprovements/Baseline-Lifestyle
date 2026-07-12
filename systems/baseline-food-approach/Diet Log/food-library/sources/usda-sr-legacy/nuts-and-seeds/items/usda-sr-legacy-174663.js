/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, pecan bunches",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 82.0,
    "energy_kcal": 1670.0,
    "fat_g": 5.4,
    "fibre_g": 5.2,
    "folate_ug": 690.0,
    "iron_mg": 15.5,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 177.0,
    "protein_g": 7.0,
    "salt_g": 1.2075,
    "sat_fat_g": 0.7,
    "sodium_mg": 483.0,
    "sugar_g": 21.9,
    "vitamin_a_ug": 748.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174663",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "nuts-and-seeds",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
