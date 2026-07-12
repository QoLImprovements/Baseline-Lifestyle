/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, marjoram, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1990.0,
    "carbs_g": 60.6,
    "energy_kcal": 271.0,
    "fat_g": 7.04,
    "fibre_g": 40.3,
    "folate_ug": 274.0,
    "iron_mg": 82.7,
    "magnesium_mg": 346.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 306.0,
    "potassium_mg": 1520.0,
    "protein_g": 12.7,
    "salt_g": 0.1925,
    "sat_fat_g": 0.529,
    "sodium_mg": 77.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 403.0,
    "vitamin_c_mg": 51.4,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 622.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170928",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "other-foods",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
