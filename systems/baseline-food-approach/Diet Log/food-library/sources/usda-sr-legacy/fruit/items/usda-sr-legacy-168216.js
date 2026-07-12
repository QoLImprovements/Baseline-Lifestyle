/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Plantains, green, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 29.2,
    "energy_kcal": 507.0,
    "fat_g": 0.08,
    "fibre_g": 2.6,
    "folate_ug": 48.0,
    "iron_mg": 0.3,
    "magnesium_mg": 28.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 24.0,
    "potassium_mg": 289.0,
    "protein_g": 1.09,
    "salt_g": 0.005,
    "sat_fat_g": 0.072,
    "sodium_mg": 2.0,
    "sugar_g": 2.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168216",
  "state": "Boiled",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "boiled",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
