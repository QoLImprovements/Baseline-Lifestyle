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
  "id": "usda-sr-legacy-172053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 909.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    }
  ],
  "name": "PIZZA HUT 14\" Pepperoni Pizza, Pan Crust",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 31.8,
    "energy_kcal": 1220.0,
    "fat_g": 13.1,
    "fibre_g": 2.0,
    "folate_ug": 103.0,
    "iron_mg": 2.57,
    "magnesium_mg": 22.0,
    "omega3_g": 0.357,
    "phosphorus_mg": 193.0,
    "potassium_mg": 187.0,
    "protein_g": 11.5,
    "salt_g": 1.69,
    "sat_fat_g": 4.82,
    "sodium_mg": 676.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 21.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172053",
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
