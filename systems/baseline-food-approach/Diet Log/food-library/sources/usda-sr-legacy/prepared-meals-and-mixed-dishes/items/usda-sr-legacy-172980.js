/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cereals, QUAKER, QUAKER MultiGrain Oatmeal, prepared with water, salt",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 13.5,
    "energy_kcal": 255.0,
    "fat_g": 0.47,
    "fibre_g": 2.2,
    "folate_ug": 5.0,
    "iron_mg": 0.56,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 75.0,
    "protein_g": 2.07,
    "salt_g": 0.175,
    "sat_fat_g": 0.095,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172980",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
