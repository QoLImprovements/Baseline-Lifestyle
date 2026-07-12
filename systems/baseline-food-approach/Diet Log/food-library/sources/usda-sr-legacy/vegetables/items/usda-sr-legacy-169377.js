/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    }
  ],
  "name": "Mushrooms, portabella, exposed to ultraviolet light, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 4.44,
    "energy_kcal": 29.0,
    "fat_g": 0.58,
    "fibre_g": 2.2,
    "folate_ug": 19.0,
    "iron_mg": 0.4,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 437.0,
    "protein_g": 3.28,
    "salt_g": 0.0275,
    "sat_fat_g": 0.028,
    "sodium_mg": 11.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169377",
  "state": "Grilled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "grilled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
