/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, QUAKER OAT LIFE, plain",
  "nutritionPerBasis": {
    "calcium_mg": 351.0,
    "carbs_g": 77.7,
    "energy_kcal": 1560.0,
    "fat_g": 4.43,
    "fibre_g": 6.6,
    "folate_ug": 1300.0,
    "iron_mg": 29.3,
    "magnesium_mg": 98.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 423.0,
    "potassium_mg": 283.0,
    "protein_g": 9.98,
    "salt_g": 1.2525,
    "sat_fat_g": 0.83,
    "sodium_mg": 501.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173891",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
