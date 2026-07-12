/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 2.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, sesame seed kernels, dried (decorticated)",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 11.7,
    "energy_kcal": 2640.0,
    "fat_g": 61.2,
    "fibre_g": 11.6,
    "folate_ug": 115.0,
    "iron_mg": 6.36,
    "magnesium_mg": 345.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 667.0,
    "potassium_mg": 370.0,
    "protein_g": 20.4,
    "salt_g": 0.1175,
    "sat_fat_g": 9.06,
    "sodium_mg": 47.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169412",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
