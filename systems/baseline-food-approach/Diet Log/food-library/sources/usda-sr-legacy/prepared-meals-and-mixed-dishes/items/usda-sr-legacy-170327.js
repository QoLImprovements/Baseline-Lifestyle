/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "medium-serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "medium-serving",
      "kind": "unit",
      "label": "medium serving"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "small-serving",
      "kind": "unit",
      "label": "small serving"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "large-serving",
      "kind": "unit",
      "label": "large serving"
    }
  ],
  "name": "BURGER KING, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 38.7,
    "energy_kcal": 280.0,
    "fat_g": 12.5,
    "fibre_g": 2.9,
    "folate_ug": 0.0,
    "iron_mg": 0.73,
    "magnesium_mg": 27.0,
    "omega3_g": 0.273,
    "phosphorus_mg": 119.0,
    "potassium_mg": 467.0,
    "protein_g": 3.23,
    "salt_g": 0.6975,
    "sat_fat_g": 2.14,
    "sodium_mg": 279.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 2.45,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170327",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
