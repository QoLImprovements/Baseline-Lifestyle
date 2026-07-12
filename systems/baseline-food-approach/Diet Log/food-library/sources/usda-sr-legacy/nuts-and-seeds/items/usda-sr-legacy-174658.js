/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "0-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "0-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Natural Granola Apple Cranberry Almond",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 74.7,
    "energy_kcal": 418.0,
    "fat_g": 11.1,
    "fibre_g": 9.9,
    "folate_ug": 31.0,
    "iron_mg": 2.47,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 334.0,
    "potassium_mg": 444.0,
    "protein_g": 9.21,
    "salt_g": 0.1175,
    "sat_fat_g": 1.13,
    "sodium_mg": 47.0,
    "sugar_g": 27.4,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174658",
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
