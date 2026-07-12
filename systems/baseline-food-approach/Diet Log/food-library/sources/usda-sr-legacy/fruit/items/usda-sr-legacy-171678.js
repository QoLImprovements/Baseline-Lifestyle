/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, ready-to-eat, MALT-O-MEAL, Blueberry Mini SPOONERS",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 79.4,
    "energy_kcal": 350.0,
    "fat_g": 1.92,
    "fibre_g": 10.3,
    "folate_ug": 848.0,
    "iron_mg": 29.4,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 331.0,
    "potassium_mg": 327.0,
    "protein_g": 8.81,
    "salt_g": 0.005,
    "sat_fat_g": 0.4,
    "sodium_mg": 2.0,
    "sugar_g": 18.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171678",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "fruit",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
