/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172440",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soybeans, mature seeds, roasted, salted",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 30.2,
    "energy_kcal": 1960.0,
    "fat_g": 25.4,
    "fibre_g": 17.7,
    "folate_ug": 211.0,
    "iron_mg": 3.9,
    "magnesium_mg": 145.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 363.0,
    "potassium_mg": 1470.0,
    "protein_g": 38.6,
    "salt_g": 0.4075,
    "sat_fat_g": 3.67,
    "sodium_mg": 163.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 50.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172440",
  "state": "Roasted",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
