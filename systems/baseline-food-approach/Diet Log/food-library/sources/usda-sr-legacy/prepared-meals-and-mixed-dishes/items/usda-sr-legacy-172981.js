/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, HEALTH VALLEY, FIBER 7 Flakes",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 78.2,
    "energy_kcal": 1480.0,
    "fat_g": 1.41,
    "fibre_g": 14.1,
    "folate_ug": 141.0,
    "iron_mg": 2.54,
    "magnesium_mg": 144.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 327.0,
    "potassium_mg": 480.0,
    "protein_g": 14.4,
    "salt_g": 0.5,
    "sat_fat_g": 0.261,
    "sodium_mg": 200.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172981",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
