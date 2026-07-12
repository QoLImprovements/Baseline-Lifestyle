/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, SWEET CRUNCH/QUISP",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 85.0,
    "energy_kcal": 406.0,
    "fat_g": 6.08,
    "fibre_g": 2.3,
    "folate_ug": 1560.0,
    "iron_mg": 18.4,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 187.0,
    "protein_g": 4.51,
    "salt_g": 1.85,
    "sat_fat_g": 4.44,
    "sodium_mg": 740.0,
    "sugar_g": 43.4,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171649",
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
