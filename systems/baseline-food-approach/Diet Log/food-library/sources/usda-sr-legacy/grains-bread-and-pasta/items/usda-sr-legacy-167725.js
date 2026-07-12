/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-167725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, OAT BRAN FLAKES, HEALTH VALLEY",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 78.0,
    "energy_kcal": 1590.0,
    "fat_g": 3.0,
    "fibre_g": 8.0,
    "folate_ug": 200.0,
    "iron_mg": 2.88,
    "magnesium_mg": 143.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 343.0,
    "potassium_mg": 340.0,
    "protein_g": 10.0,
    "salt_g": 0.95,
    "sat_fat_g": 1.0,
    "sodium_mg": 380.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167725",
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
