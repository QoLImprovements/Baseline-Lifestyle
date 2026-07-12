/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "half-with-liquid",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169119",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "half-with-liquid",
      "kind": "unit",
      "label": "half, with liquid"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Pears, canned, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 7.81,
    "energy_kcal": 121.0,
    "fat_g": 0.03,
    "fibre_g": 1.6,
    "folate_ug": 1.0,
    "iron_mg": 0.21,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 53.0,
    "protein_g": 0.19,
    "salt_g": 0.005,
    "sat_fat_g": 0.002,
    "sodium_mg": 2.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169119",
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
