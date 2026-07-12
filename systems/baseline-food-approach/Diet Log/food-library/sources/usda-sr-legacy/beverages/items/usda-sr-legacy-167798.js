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
  "id": "usda-sr-legacy-167798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, BOLTHOUSE FARMS, GREEN GOODNESS",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 13.0,
    "energy_kcal": 56.0,
    "fat_g": 0.33,
    "fibre_g": 0.6,
    "folate_ug": 17.0,
    "iron_mg": 0.34,
    "magnesium_mg": 15.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 16.0,
    "potassium_mg": 177.0,
    "protein_g": 0.63,
    "salt_g": 0.0275,
    "sat_fat_g": 0.068,
    "sodium_mg": 11.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167798",
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
