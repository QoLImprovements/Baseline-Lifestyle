/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "plum-with-liquid",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169950",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "plum-with-liquid",
      "kind": "unit",
      "label": "plum with liquid"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    }
  ],
  "name": "Plums, canned, purple, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.0,
    "energy_kcal": 172.0,
    "fat_g": 0.01,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.16,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 126.0,
    "protein_g": 0.39,
    "salt_g": 0.0025,
    "sat_fat_g": 0.001,
    "sodium_mg": 1.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169950",
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
