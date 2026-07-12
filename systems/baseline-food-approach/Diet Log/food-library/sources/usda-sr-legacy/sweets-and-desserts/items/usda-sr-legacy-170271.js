/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-170271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Chocolate, dark, 45- 59% cacao solids",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 61.2,
    "energy_kcal": 2280.0,
    "fat_g": 31.3,
    "fibre_g": 7.0,
    "folate_ug": 0.0,
    "iron_mg": 8.02,
    "magnesium_mg": 146.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 206.0,
    "potassium_mg": 559.0,
    "protein_g": 4.88,
    "salt_g": 0.06,
    "sat_fat_g": 18.5,
    "sodium_mg": 24.0,
    "sugar_g": 47.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170271",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
