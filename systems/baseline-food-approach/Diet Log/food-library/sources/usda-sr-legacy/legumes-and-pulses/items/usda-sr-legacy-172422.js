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
  "id": "usda-sr-legacy-172422",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, thin seeded (baby), mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 23.3,
    "energy_kcal": 527.0,
    "fat_g": 0.38,
    "fibre_g": 7.7,
    "folate_ug": 150.0,
    "iron_mg": 2.4,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 401.0,
    "protein_g": 8.04,
    "salt_g": 0.0075,
    "sat_fat_g": 0.088,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172422",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
