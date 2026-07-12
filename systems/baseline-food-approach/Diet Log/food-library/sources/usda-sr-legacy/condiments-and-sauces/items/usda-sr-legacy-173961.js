/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "slice-1-2-thick-approx-8-slices-per-can",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "slice-1-2-thick-approx-8-slices-per-can",
      "kind": "unit",
      "label": "slice (1/2\" thick, approx 8 slices per can)"
    },
    {
      "gramsPerUnit": 277.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cranberry sauce, canned, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 40.4,
    "energy_kcal": 159.0,
    "fat_g": 0.15,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.41,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 28.0,
    "protein_g": 0.9,
    "salt_g": 0.0125,
    "sat_fat_g": 0.007,
    "sodium_mg": 5.0,
    "sugar_g": 31.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173961",
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
