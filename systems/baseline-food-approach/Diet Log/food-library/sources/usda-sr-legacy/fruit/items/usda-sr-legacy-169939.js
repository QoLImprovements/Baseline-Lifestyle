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
  "id": "usda-sr-legacy-169939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "half-with-liquid",
      "kind": "unit",
      "label": "half, with liquid"
    }
  ],
  "name": "Pears, canned, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 19.2,
    "energy_kcal": 74.0,
    "fat_g": 0.13,
    "fibre_g": 1.6,
    "folate_ug": 1.0,
    "iron_mg": 0.22,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 65.0,
    "protein_g": 0.2,
    "salt_g": 0.0125,
    "sat_fat_g": 0.007,
    "sodium_mg": 5.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169939",
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
