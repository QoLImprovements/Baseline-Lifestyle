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
  "id": "usda-sr-legacy-173005",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST GREAT GRAINS Cranberry Almond Crunch",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 76.6,
    "energy_kcal": 384.0,
    "fat_g": 5.9,
    "fibre_g": 11.1,
    "folate_ug": 208.0,
    "iron_mg": 3.8,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 255.0,
    "potassium_mg": 308.0,
    "protein_g": 8.9,
    "salt_g": 0.535,
    "sat_fat_g": 0.8,
    "sodium_mg": 214.0,
    "sugar_g": 25.5,
    "vitamin_a_ug": 467.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 5.63,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173005",
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
