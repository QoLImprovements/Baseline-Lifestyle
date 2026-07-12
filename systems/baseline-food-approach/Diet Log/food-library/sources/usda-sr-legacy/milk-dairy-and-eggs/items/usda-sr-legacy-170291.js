/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Fast foods, nachos, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 34.9,
    "energy_kcal": 1440.0,
    "fat_g": 21.5,
    "fibre_g": 3.2,
    "folate_ug": 10.0,
    "iron_mg": 0.75,
    "magnesium_mg": 42.0,
    "omega3_g": 0.617,
    "phosphorus_mg": 198.0,
    "potassium_mg": 362.0,
    "protein_g": 4.32,
    "salt_g": 0.7825,
    "sat_fat_g": 2.17,
    "sodium_mg": 313.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 4.08,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170291",
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
