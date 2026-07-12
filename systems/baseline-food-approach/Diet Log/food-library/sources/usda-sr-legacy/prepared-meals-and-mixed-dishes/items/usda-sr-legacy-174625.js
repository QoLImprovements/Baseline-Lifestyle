/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "packet",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, raisins, dates and walnuts, dry",
  "nutritionPerBasis": {
    "calcium_mg": 297.0,
    "carbs_g": 72.4,
    "energy_kcal": 371.0,
    "fat_g": 6.98,
    "fibre_g": 6.9,
    "folate_ug": 239.0,
    "iron_mg": 10.7,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 296.0,
    "potassium_mg": 374.0,
    "protein_g": 8.82,
    "salt_g": 1.29,
    "sat_fat_g": 1.07,
    "sodium_mg": 516.0,
    "sugar_g": 30.8,
    "vitamin_a_ug": 2990.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174625",
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
