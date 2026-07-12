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
  "id": "usda-sr-legacy-171644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, CAP'N CRUNCH'S PEANUT BUTTER CRUNCH",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 78.6,
    "energy_kcal": 417.0,
    "fat_g": 9.23,
    "fibre_g": 2.7,
    "folate_ug": 1550.0,
    "iron_mg": 18.4,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 194.0,
    "potassium_mg": 236.0,
    "protein_g": 7.1,
    "salt_g": 1.855,
    "sat_fat_g": 3.92,
    "sodium_mg": 742.0,
    "sugar_g": 33.4,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171644",
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
