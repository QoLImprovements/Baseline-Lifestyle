/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "12-fl-oz-cup",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 348.0,
      "key": "12-fl-oz-cup",
      "kind": "unit",
      "label": "12 fl oz cup"
    }
  ],
  "name": "Light Ice Cream, soft serve, blended with milk chocolate candies",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 26.8,
    "energy_kcal": 182.0,
    "fat_g": 6.46,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.27,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 208.0,
    "protein_g": 4.02,
    "salt_g": 0.135,
    "sat_fat_g": 3.63,
    "sodium_mg": 54.0,
    "sugar_g": 24.4,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173324",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
