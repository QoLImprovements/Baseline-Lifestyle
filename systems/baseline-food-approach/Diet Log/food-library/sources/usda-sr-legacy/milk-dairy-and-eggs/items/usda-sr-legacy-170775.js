/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "12-fl-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 347.0,
      "key": "12-fl-oz",
      "kind": "unit",
      "label": "12 fl oz"
    }
  ],
  "name": "Fast foods, strawberry banana smoothie made with ice and low-fat yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 15.0,
    "energy_kcal": 65.0,
    "fat_g": 0.14,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 0.14,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 131.0,
    "protein_g": 0.86,
    "salt_g": 0.035,
    "sat_fat_g": 0.0,
    "sodium_mg": 14.0,
    "sugar_g": 12.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170775",
  "state": "Raw",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
