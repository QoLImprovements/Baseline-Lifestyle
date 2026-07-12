/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pie-23-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 643.0,
      "key": "pie-23-oz",
      "kind": "unit",
      "label": "pie 23 oz"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, cheese topping, thin crispy crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 275.0,
    "carbs_g": 26.5,
    "energy_kcal": 1030.0,
    "fat_g": 9.91,
    "fibre_g": 3.0,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 27.0,
    "omega3_g": 0.116,
    "phosphorus_mg": 236.0,
    "potassium_mg": 233.0,
    "protein_g": 13.0,
    "salt_g": 1.265,
    "sat_fat_g": 4.6,
    "sodium_mg": 506.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170758",
  "state": "Baked",
  "subcategory": "Fast Foods",
  "tags": [
    "baked",
    "fast-foods",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
