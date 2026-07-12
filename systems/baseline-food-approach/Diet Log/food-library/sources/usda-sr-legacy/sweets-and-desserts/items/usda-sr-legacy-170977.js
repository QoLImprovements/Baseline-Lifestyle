/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, dessert, dutch apple, junior",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 19.2,
    "energy_kcal": 79.0,
    "fat_g": 0.16,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 0.11,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 67.0,
    "protein_g": 0.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.025,
    "sodium_mg": 3.0,
    "sugar_g": 17.9,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170977",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
