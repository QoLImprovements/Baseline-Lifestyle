/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, ODWALLA, ORIGINAL SUPERFOOD",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.5,
    "energy_kcal": 210.0,
    "fat_g": 0.36,
    "fibre_g": 0.6,
    "folate_ug": 14.0,
    "iron_mg": 0.39,
    "magnesium_mg": 9.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 24.0,
    "potassium_mg": 145.0,
    "protein_g": 0.63,
    "salt_g": 0.0075,
    "sat_fat_g": 0.105,
    "sodium_mg": 3.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 31.3,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168208",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
