/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Weight Control Instant Oatmeal, maple and brown sugar",
  "nutritionPerBasis": {
    "calcium_mg": 268.0,
    "carbs_g": 64.2,
    "energy_kcal": 361.0,
    "fat_g": 6.2,
    "fibre_g": 13.0,
    "folate_ug": 235.0,
    "iron_mg": 10.1,
    "magnesium_mg": 116.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 392.0,
    "potassium_mg": 330.0,
    "protein_g": 16.4,
    "salt_g": 1.605,
    "sat_fat_g": 1.16,
    "sodium_mg": 642.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 2430.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173922",
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
