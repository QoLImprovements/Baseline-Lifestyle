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
  "id": "usda-sr-legacy-171661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, oats, instant, fortified, plain, dry",
  "nutritionPerBasis": {
    "calcium_mg": 351.0,
    "carbs_g": 69.5,
    "energy_kcal": 362.0,
    "fat_g": 6.9,
    "fibre_g": 10.0,
    "folate_ug": 32.0,
    "iron_mg": 24.7,
    "magnesium_mg": 128.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 423.0,
    "potassium_mg": 366.0,
    "protein_g": 11.9,
    "salt_g": 0.55,
    "sat_fat_g": 1.35,
    "sodium_mg": 220.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 772.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171661",
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
