/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pie",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 562.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 362.0,
      "key": "0-5-pie",
      "kind": "unit",
      "label": "0.5 pie"
    }
  ],
  "name": "LITTLE CAESARS 14\" Cheese Pizza, Thin Crust",
  "nutritionPerBasis": {
    "calcium_mg": 422.0,
    "carbs_g": 22.8,
    "energy_kcal": 309.0,
    "fat_g": 17.0,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 0.64,
    "magnesium_mg": 28.0,
    "omega3_g": 0.378,
    "phosphorus_mg": 297.0,
    "potassium_mg": 177.0,
    "protein_g": 16.2,
    "salt_g": 1.1375,
    "sat_fat_g": 7.33,
    "sodium_mg": 455.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173289",
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
