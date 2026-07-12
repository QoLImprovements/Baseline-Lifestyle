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
  "id": "usda-sr-legacy-173920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, oats, instant, fortified, maple and brown sugar, dry",
  "nutritionPerBasis": {
    "calcium_mg": 258.0,
    "carbs_g": 76.7,
    "energy_kcal": 386.0,
    "fat_g": 4.73,
    "fibre_g": 7.2,
    "folate_ug": 148.0,
    "iron_mg": 10.4,
    "magnesium_mg": 90.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 305.0,
    "potassium_mg": 361.0,
    "protein_g": 9.25,
    "salt_g": 1.2625,
    "sat_fat_g": 0.778,
    "sodium_mg": 505.0,
    "sugar_g": 30.3,
    "vitamin_a_ug": 692.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173920",
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
