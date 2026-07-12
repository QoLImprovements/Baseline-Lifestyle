/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "14-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 414.0,
      "key": "14-fl-oz",
      "kind": "unit",
      "label": "14 fl oz"
    }
  ],
  "name": "Beverages, CYTOSPORT, Muscle Milk, ready-to-drink",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 2.28,
    "energy_kcal": 218.0,
    "fat_g": 2.17,
    "fibre_g": 0.2,
    "folate_ug": 33.0,
    "iron_mg": 1.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 198.0,
    "protein_g": 5.87,
    "salt_g": 0.2375,
    "sat_fat_g": 0.362,
    "sodium_mg": 95.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 27.6,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174814",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
