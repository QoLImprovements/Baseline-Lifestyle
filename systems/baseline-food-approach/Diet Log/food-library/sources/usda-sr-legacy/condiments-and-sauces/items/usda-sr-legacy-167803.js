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
  "id": "usda-sr-legacy-167803",
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
  "name": "Cranberry sauce, whole, canned, OCEAN SPRAY",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 40.4,
    "energy_kcal": 158.0,
    "fat_g": 0.05,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 21.0,
    "protein_g": 0.75,
    "salt_g": 0.0125,
    "sat_fat_g": 0.007,
    "sodium_mg": 5.0,
    "sugar_g": 31.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167803",
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
