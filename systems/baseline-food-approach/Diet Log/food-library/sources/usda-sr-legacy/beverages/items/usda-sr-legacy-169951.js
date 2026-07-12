/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
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
  "name": "Plums, canned, purple, juice pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 15.2,
    "energy_kcal": 243.0,
    "fat_g": 0.02,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.34,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 154.0,
    "protein_g": 0.51,
    "salt_g": 0.0025,
    "sat_fat_g": 0.002,
    "sodium_mg": 1.0,
    "sugar_g": 14.2,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169951",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
