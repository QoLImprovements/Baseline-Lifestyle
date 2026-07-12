/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "6-fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "6-fl-oz",
      "kind": "unit",
      "label": "6 fl oz"
    },
    {
      "gramsPerUnit": 295.0,
      "key": "10-fl-oz",
      "kind": "unit",
      "label": "10 fl oz"
    }
  ],
  "name": "Apple juice, canned or bottled, unsweetened, with added ascorbic acid, calcium, and potassium",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 11.5,
    "energy_kcal": 201.0,
    "fat_g": 0.17,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.13,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 184.0,
    "protein_g": 0.12,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 9.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.3,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167800",
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
