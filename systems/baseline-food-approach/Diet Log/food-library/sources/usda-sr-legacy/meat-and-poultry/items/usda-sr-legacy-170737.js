/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170737",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.4,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    }
  ],
  "name": "KFC, Popcorn Chicken",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 21.2,
    "energy_kcal": 1470.0,
    "fat_g": 21.7,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 1.42,
    "magnesium_mg": 28.0,
    "omega3_g": 0.583,
    "phosphorus_mg": 299.0,
    "potassium_mg": 288.0,
    "protein_g": 17.7,
    "salt_g": 2.85,
    "sat_fat_g": 3.95,
    "sodium_mg": 1140.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 17.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170737",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
