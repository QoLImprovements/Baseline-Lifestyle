/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, fruit supreme dessert",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 17.2,
    "energy_kcal": 73.0,
    "fat_g": 0.2,
    "fibre_g": 2.0,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 129.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.03,
    "sodium_mg": 1.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 12.7,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168140",
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
