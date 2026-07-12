/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, cereal, rice, with bananas, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 156.0,
    "carbs_g": 10.5,
    "energy_kcal": 86.0,
    "fat_g": 3.32,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 3.63,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 180.0,
    "protein_g": 3.57,
    "salt_g": 0.1175,
    "sat_fat_g": 1.8,
    "sodium_mg": 47.0,
    "sugar_g": 6.13,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173534",
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
