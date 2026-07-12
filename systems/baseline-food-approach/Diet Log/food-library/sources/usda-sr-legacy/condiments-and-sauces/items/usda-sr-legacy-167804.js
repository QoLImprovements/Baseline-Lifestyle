/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "0-25-cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Cranberry sauce, jellied, canned, OCEAN SPRAY",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 40.6,
    "energy_kcal": 669.0,
    "fat_g": 0.04,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.62,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 34.0,
    "protein_g": 1.05,
    "salt_g": 0.0125,
    "sat_fat_g": 0.007,
    "sodium_mg": 5.0,
    "sugar_g": 32.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167804",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
