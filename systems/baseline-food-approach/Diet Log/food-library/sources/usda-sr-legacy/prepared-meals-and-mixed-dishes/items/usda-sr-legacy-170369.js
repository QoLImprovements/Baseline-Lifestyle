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
  "id": "usda-sr-legacy-170369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 634.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 14\" Pepperoni Pizza, THIN 'N CRISPY Crust",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 32.7,
    "energy_kcal": 1390.0,
    "fat_g": 16.2,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 2.78,
    "magnesium_mg": 25.0,
    "omega3_g": 0.28,
    "phosphorus_mg": 244.0,
    "potassium_mg": 222.0,
    "protein_g": 14.1,
    "salt_g": 2.4175,
    "sat_fat_g": 6.67,
    "sodium_mg": 967.0,
    "sugar_g": 2.79,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170369",
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
