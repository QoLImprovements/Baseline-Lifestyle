/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1224.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" EXTRAVAGANZZA FEAST Pizza, Classic Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 25.7,
    "energy_kcal": 1020.0,
    "fat_g": 11.1,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 2.32,
    "magnesium_mg": 22.0,
    "omega3_g": 0.127,
    "phosphorus_mg": 184.0,
    "potassium_mg": 174.0,
    "protein_g": 10.3,
    "salt_g": 1.14,
    "sat_fat_g": 4.39,
    "sodium_mg": 456.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172046",
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
