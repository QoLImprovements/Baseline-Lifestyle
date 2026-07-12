/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pie-12-diameter",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170363",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 876.0,
      "key": "pie-12-diameter",
      "kind": "unit",
      "label": "pie 12\" diameter"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, supreme topping, rising crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 27.9,
    "energy_kcal": 1070.0,
    "fat_g": 10.7,
    "fibre_g": 2.3,
    "folate_ug": 0.0,
    "iron_mg": 1.01,
    "magnesium_mg": 27.0,
    "omega3_g": 0.154,
    "phosphorus_mg": 211.0,
    "potassium_mg": 210.0,
    "protein_g": 11.7,
    "salt_g": 1.78,
    "sat_fat_g": 3.96,
    "sodium_mg": 712.0,
    "sugar_g": 4.71,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170363",
  "state": "Baked",
  "subcategory": "Fast Foods",
  "tags": [
    "baked",
    "fast-foods",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
