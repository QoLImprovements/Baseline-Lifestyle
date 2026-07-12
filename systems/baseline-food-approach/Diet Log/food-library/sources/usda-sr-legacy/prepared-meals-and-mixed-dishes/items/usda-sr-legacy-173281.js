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
  "id": "usda-sr-legacy-173281",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 1107.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 541.0,
      "key": "0-5-pizza",
      "kind": "unit",
      "label": "0.5 pizza"
    }
  ],
  "name": "PIZZA HUT 12\" Super Supreme Pizza, Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 25.6,
    "energy_kcal": 243.0,
    "fat_g": 10.7,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 2.0,
    "magnesium_mg": 23.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 200.0,
    "potassium_mg": 233.0,
    "protein_g": 10.9,
    "salt_g": 1.7225,
    "sat_fat_g": 4.55,
    "sodium_mg": 689.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173281",
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
