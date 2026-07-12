/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174983",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cracker-sandwich",
      "kind": "unit",
      "label": "cracker, sandwich"
    }
  ],
  "name": "Crackers, standard snack-type, sandwich, with cheese filling",
  "nutritionPerBasis": {
    "calcium_mg": 257.0,
    "carbs_g": 61.7,
    "energy_kcal": 2000.0,
    "fat_g": 21.1,
    "fibre_g": 1.9,
    "folate_ug": 100.0,
    "iron_mg": 2.39,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 429.0,
    "protein_g": 9.3,
    "salt_g": 2.445,
    "sat_fat_g": 6.12,
    "sodium_mg": 978.0,
    "sugar_g": 3.18,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174983",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
