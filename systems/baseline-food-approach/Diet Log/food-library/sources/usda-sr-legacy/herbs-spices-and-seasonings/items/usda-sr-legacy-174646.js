/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, CINNAMON TOASTERS",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 78.3,
    "energy_kcal": 1780.0,
    "fat_g": 12.1,
    "fibre_g": 5.0,
    "folate_ug": 667.0,
    "iron_mg": 30.0,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 157.0,
    "protein_g": 3.32,
    "salt_g": 1.1825,
    "sat_fat_g": 1.85,
    "sodium_mg": 473.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 498.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174646",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
