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
  "id": "usda-sr-legacy-173022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "fig-with-liquid",
      "kind": "unit",
      "label": "fig with liquid"
    }
  ],
  "name": "Figs, canned, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 14.0,
    "energy_kcal": 53.0,
    "fat_g": 0.1,
    "fibre_g": 2.2,
    "folate_ug": 2.0,
    "iron_mg": 0.29,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 103.0,
    "protein_g": 0.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.02,
    "sodium_mg": 1.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173022",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
