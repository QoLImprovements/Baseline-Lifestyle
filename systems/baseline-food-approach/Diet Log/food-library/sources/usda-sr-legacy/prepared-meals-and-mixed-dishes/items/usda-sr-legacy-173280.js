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
  "id": "usda-sr-legacy-173280",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 778.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 12\" Pepperoni Pizza, Pan Crust",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 30.5,
    "energy_kcal": 298.0,
    "fat_g": 14.2,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 2.14,
    "magnesium_mg": 22.0,
    "omega3_g": 0.357,
    "phosphorus_mg": 205.0,
    "potassium_mg": 199.0,
    "protein_g": 12.0,
    "salt_g": 1.73,
    "sat_fat_g": 5.27,
    "sodium_mg": 692.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173280",
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
