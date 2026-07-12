/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 922.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, cheese topping, thick crust",
  "nutritionPerBasis": {
    "calcium_mg": 179.0,
    "carbs_g": 33.2,
    "energy_kcal": 1130.0,
    "fat_g": 10.5,
    "fibre_g": 2.2,
    "folate_ug": 106.0,
    "iron_mg": 2.48,
    "magnesium_mg": 23.0,
    "omega3_g": 0.314,
    "phosphorus_mg": 209.0,
    "potassium_mg": 169.0,
    "protein_g": 10.8,
    "salt_g": 1.4925,
    "sat_fat_g": 4.23,
    "sodium_mg": 597.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173293",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
