/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-halves-or-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-halves-or-slices",
      "kind": "unit",
      "label": "cup, halves or slices"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "half-with-liquid",
      "kind": "unit",
      "label": "half, with liquid"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peaches, canned, juice pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.6,
    "energy_kcal": 184.0,
    "fat_g": 0.03,
    "fibre_g": 1.3,
    "folate_ug": 3.0,
    "iron_mg": 0.27,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 128.0,
    "protein_g": 0.63,
    "salt_g": 0.01,
    "sat_fat_g": 0.004,
    "sodium_mg": 4.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169930",
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
