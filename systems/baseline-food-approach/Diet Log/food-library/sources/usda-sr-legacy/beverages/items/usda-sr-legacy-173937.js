/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "apricot-half-with-liquid",
      "kind": "unit",
      "label": "apricot half with liquid"
    }
  ],
  "name": "Apricots, canned, juice pack, with skin, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 12.3,
    "energy_kcal": 201.0,
    "fat_g": 0.04,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 165.0,
    "protein_g": 0.63,
    "salt_g": 0.01,
    "sat_fat_g": 0.003,
    "sodium_mg": 4.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173937",
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
