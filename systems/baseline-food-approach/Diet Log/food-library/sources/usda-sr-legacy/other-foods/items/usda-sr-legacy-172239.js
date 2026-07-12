/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 1.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spearmint, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1490.0,
    "carbs_g": 52.0,
    "energy_kcal": 1190.0,
    "fat_g": 6.03,
    "fibre_g": 29.8,
    "folate_ug": 530.0,
    "iron_mg": 87.5,
    "magnesium_mg": 602.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 276.0,
    "potassium_mg": 1920.0,
    "protein_g": 19.9,
    "salt_g": 0.86,
    "sat_fat_g": 1.58,
    "sodium_mg": 344.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 529.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172239",
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
