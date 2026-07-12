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
  "id": "usda-sr-legacy-169041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, GREAT GRAINS, Raisin, Date & Pecan",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 74.3,
    "energy_kcal": 378.0,
    "fat_g": 7.1,
    "fibre_g": 9.3,
    "folate_ug": 182.0,
    "iron_mg": 16.4,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 378.0,
    "protein_g": 7.9,
    "salt_g": 0.6175,
    "sat_fat_g": 0.8,
    "sodium_mg": 247.0,
    "sugar_g": 24.1,
    "vitamin_a_ug": 407.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169041",
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
