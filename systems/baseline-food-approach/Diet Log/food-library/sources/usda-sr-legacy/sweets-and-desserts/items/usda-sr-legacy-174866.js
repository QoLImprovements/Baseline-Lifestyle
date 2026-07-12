/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-3-heaping-tsp-or-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-174866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving-3-heaping-tsp-or-1-envelope",
      "kind": "unit",
      "label": "serving (3 heaping tsp or 1 envelope)"
    }
  ],
  "name": "Beverages, malted drink mix, chocolate, powder",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 86.9,
    "energy_kcal": 1720.0,
    "fat_g": 4.76,
    "fibre_g": 4.8,
    "folate_ug": 37.0,
    "iron_mg": 2.28,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 618.0,
    "protein_g": 5.1,
    "salt_g": 0.475,
    "sat_fat_g": 2.38,
    "sodium_mg": 190.0,
    "sugar_g": 66.7,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174866",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
