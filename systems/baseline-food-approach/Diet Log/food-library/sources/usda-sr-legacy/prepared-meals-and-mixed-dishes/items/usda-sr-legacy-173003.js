/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173003",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup-nlea-serving",
      "kind": "unit",
      "label": "cup (NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, RALSTON Corn Biscuits",
  "nutritionPerBasis": {
    "calcium_mg": 378.0,
    "carbs_g": 85.8,
    "energy_kcal": 376.0,
    "fat_g": 1.05,
    "fibre_g": 2.6,
    "folate_ug": 667.0,
    "iron_mg": 38.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 200.0,
    "protein_g": 5.83,
    "salt_g": 1.9175,
    "sat_fat_g": 0.193,
    "sodium_mg": 767.0,
    "sugar_g": 9.51,
    "vitamin_a_ug": 1090.0,
    "vitamin_c_mg": 18.5,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173003",
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
