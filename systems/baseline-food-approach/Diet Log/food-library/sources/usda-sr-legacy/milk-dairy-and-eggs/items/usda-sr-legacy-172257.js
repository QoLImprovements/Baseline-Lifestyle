/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172257",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Babyfood, ravioli, cheese filled, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 16.3,
    "energy_kcal": 414.0,
    "fat_g": 2.2,
    "fibre_g": 0.1,
    "folate_ug": 36.0,
    "iron_mg": 0.8,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 56.0,
    "potassium_mg": 32.0,
    "protein_g": 3.6,
    "salt_g": 0.705,
    "sat_fat_g": 0.96,
    "sodium_mg": 282.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172257",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
