/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "apricot-half-with-liquid",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "apricot-half-with-liquid",
      "kind": "unit",
      "label": "apricot half with liquid"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    }
  ],
  "name": "Apricots, canned, heavy syrup pack, with skin, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 21.5,
    "energy_kcal": 347.0,
    "fat_g": 0.08,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 140.0,
    "protein_g": 0.53,
    "salt_g": 0.01,
    "sat_fat_g": 0.005,
    "sodium_mg": 4.0,
    "sugar_g": 19.9,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171699",
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
