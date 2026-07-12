/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving-nlea-serving-size-0-75-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "serving-nlea-serving-size-0-75-cup",
      "kind": "unit",
      "label": "serving (NLEA serving size = 0.75 cup)"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, RALSTON Enriched Wheat Bran flakes",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 79.8,
    "energy_kcal": 1630.0,
    "fat_g": 3.36,
    "fibre_g": 16.9,
    "folate_ug": 1380.0,
    "iron_mg": 67.7,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 533.0,
    "potassium_mg": 630.0,
    "protein_g": 10.2,
    "salt_g": 1.465,
    "sat_fat_g": 0.433,
    "sodium_mg": 586.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 531.0,
    "vitamin_c_mg": 240.0,
    "vitamin_e_mg": 80.5,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173002",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
