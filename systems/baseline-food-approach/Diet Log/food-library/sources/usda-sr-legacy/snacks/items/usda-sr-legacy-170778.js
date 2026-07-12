/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "wrap",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "wrap",
      "kind": "unit",
      "label": "wrap"
    }
  ],
  "name": "McDONALD'S, RANCH SNACK WRAP, Grilled",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 18.4,
    "energy_kcal": 927.0,
    "fat_g": 10.3,
    "fibre_g": 0.9,
    "folate_ug": 45.0,
    "iron_mg": 1.45,
    "magnesium_mg": 20.0,
    "omega3_g": 0.375,
    "phosphorus_mg": 184.0,
    "potassium_mg": 192.0,
    "protein_g": 13.8,
    "salt_g": 1.4425,
    "sat_fat_g": 3.36,
    "sodium_mg": 577.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170778",
  "state": "Grilled",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grilled",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
