/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171648",
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
  "name": "Cereals ready-to-eat, POST, GRAPE-NUTS Flakes",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 82.0,
    "energy_kcal": 376.0,
    "fat_g": 3.7,
    "fibre_g": 10.2,
    "folate_ug": 690.0,
    "iron_mg": 27.9,
    "magnesium_mg": 101.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 336.0,
    "protein_g": 9.4,
    "salt_g": 1.175,
    "sat_fat_g": 0.5,
    "sodium_mg": 470.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 775.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171648",
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
