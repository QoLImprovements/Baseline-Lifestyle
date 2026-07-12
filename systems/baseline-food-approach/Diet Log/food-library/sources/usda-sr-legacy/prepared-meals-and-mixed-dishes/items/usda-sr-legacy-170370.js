/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 563.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "DOMINO'S 14\" Pepperoni Pizza, Crunchy Thin Crust",
  "nutritionPerBasis": {
    "calcium_mg": 236.0,
    "carbs_g": 25.4,
    "energy_kcal": 328.0,
    "fat_g": 19.0,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 1.13,
    "magnesium_mg": 25.0,
    "omega3_g": 0.377,
    "phosphorus_mg": 263.0,
    "potassium_mg": 224.0,
    "protein_g": 13.9,
    "salt_g": 1.9575,
    "sat_fat_g": 7.56,
    "sodium_mg": 783.0,
    "sugar_g": 3.65,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170370",
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
