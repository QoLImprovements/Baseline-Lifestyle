/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "plum-with-liquid",
      "kind": "unit",
      "label": "plum with liquid"
    }
  ],
  "name": "Plums, canned, purple, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 23.2,
    "energy_kcal": 372.0,
    "fat_g": 0.1,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.84,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 91.0,
    "protein_g": 0.36,
    "salt_g": 0.0475,
    "sat_fat_g": 0.008,
    "sodium_mg": 19.0,
    "sugar_g": 22.3,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169132",
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
