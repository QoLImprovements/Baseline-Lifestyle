/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from boiled. Water and fat analysed, 2017. 11 samples, fresh, imported, Stir fried in 1-2.5 tbsp oil for 2-5 minutes",
  "id": "cofid-current-13-642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, mange-tout, stir-fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 3.6,
    "energy_kcal": 69.0,
    "fat_g": 4.9,
    "fibre_g": 1.4,
    "folate_ug": 10.0,
    "iron_mg": 0.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 143.0,
    "protein_g": 2.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.3,
    "sodium_mg": 1.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-642",
  "state": "Fried",
  "subcategory": "DF",
  "tags": [
    "df",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
