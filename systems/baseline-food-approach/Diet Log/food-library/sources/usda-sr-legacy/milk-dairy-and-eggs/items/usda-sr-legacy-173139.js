/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, SLIM-FAST OPTIMA meal bar, milk chocolate peanut",
  "nutritionPerBasis": {
    "calcium_mg": 668.0,
    "carbs_g": 60.2,
    "energy_kcal": 1620.0,
    "fat_g": 8.92,
    "fibre_g": 5.1,
    "folate_ug": 430.0,
    "iron_mg": 4.98,
    "magnesium_mg": 250.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 673.0,
    "potassium_mg": 289.0,
    "protein_g": 16.2,
    "salt_g": 0.6325,
    "sat_fat_g": 5.36,
    "sodium_mg": 253.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 940.0,
    "vitamin_c_mg": 96.6,
    "vitamin_e_mg": 6.0,
    "vitamin_k_ug": 129.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173139",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
