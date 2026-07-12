/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170273",
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
    },
    {
      "gramsPerUnit": 101.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Chocolate, dark, 70-85% cacao solids",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 45.9,
    "energy_kcal": 2500.0,
    "fat_g": 42.6,
    "fibre_g": 10.9,
    "folate_ug": 0.0,
    "iron_mg": 11.9,
    "magnesium_mg": 228.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 308.0,
    "potassium_mg": 715.0,
    "protein_g": 7.79,
    "salt_g": 0.05,
    "sat_fat_g": 24.5,
    "sodium_mg": 20.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170273",
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
