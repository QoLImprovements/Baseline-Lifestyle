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
  "id": "usda-sr-legacy-170760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 759.0,
      "key": "pie-12-diameter",
      "kind": "unit",
      "label": "pie 12\" diameter"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, pepperoni topping, rising crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 31.2,
    "energy_kcal": 1110.0,
    "fat_g": 10.1,
    "fibre_g": 2.3,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 27.0,
    "omega3_g": 0.154,
    "phosphorus_mg": 225.0,
    "potassium_mg": 212.0,
    "protein_g": 12.5,
    "salt_g": 1.8575,
    "sat_fat_g": 3.76,
    "sodium_mg": 743.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170760",
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
