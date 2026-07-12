/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 852.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "LITTLE CAESARS 14\" Original Round Pepperoni Pizza, Regular Crust",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 31.0,
    "energy_kcal": 273.0,
    "fat_g": 10.5,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 28.0,
    "omega3_g": 0.158,
    "phosphorus_mg": 224.0,
    "potassium_mg": 178.0,
    "protein_g": 13.6,
    "salt_g": 1.295,
    "sat_fat_g": 4.54,
    "sodium_mg": 518.0,
    "sugar_g": 3.76,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172048",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
