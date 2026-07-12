/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "melon",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1640.0,
      "key": "melon",
      "kind": "unit",
      "label": "melon"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "0-1-fruit",
      "kind": "unit",
      "label": "0.1 fruit"
    }
  ],
  "name": "Melons, casaba, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 6.58,
    "energy_kcal": 28.0,
    "fat_g": 0.1,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 182.0,
    "protein_g": 1.11,
    "salt_g": 0.0225,
    "sat_fat_g": 0.025,
    "sodium_mg": 9.0,
    "sugar_g": 5.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.8,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169093",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
