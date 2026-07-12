/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "individual-3-5-fl-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "individual-3-5-fl-oz",
      "kind": "unit",
      "label": "individual (3.5 fl oz)"
    }
  ],
  "name": "Ice creams, regular, low carbohydrate, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 26.8,
    "energy_kcal": 237.0,
    "fat_g": 12.7,
    "fibre_g": 4.8,
    "folate_ug": 16.0,
    "iron_mg": 0.93,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 249.0,
    "protein_g": 3.8,
    "salt_g": 0.19,
    "sat_fat_g": 6.8,
    "sodium_mg": 76.0,
    "sugar_g": 6.35,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170270",
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
