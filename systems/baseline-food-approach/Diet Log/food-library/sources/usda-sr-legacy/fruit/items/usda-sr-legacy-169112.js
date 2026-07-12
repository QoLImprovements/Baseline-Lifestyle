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
  "id": "usda-sr-legacy-169112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "half-with-liquid",
      "kind": "unit",
      "label": "half, with liquid"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peaches, canned, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 19.9,
    "energy_kcal": 310.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 3.0,
    "iron_mg": 0.27,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 92.0,
    "protein_g": 0.45,
    "salt_g": 0.015,
    "sat_fat_g": 0.01,
    "sodium_mg": 6.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169112",
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
