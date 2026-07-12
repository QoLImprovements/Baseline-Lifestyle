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
  "id": "usda-sr-legacy-169077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, wheat and bran, presweetened with nuts and fruits",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 76.2,
    "energy_kcal": 385.0,
    "fat_g": 5.6,
    "fibre_g": 9.7,
    "folate_ug": 182.0,
    "iron_mg": 9.82,
    "magnesium_mg": 120.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 294.0,
    "potassium_mg": 382.0,
    "protein_g": 7.1,
    "salt_g": 0.6125,
    "sat_fat_g": 0.8,
    "sodium_mg": 245.0,
    "sugar_g": 23.6,
    "vitamin_a_ug": 410.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169077",
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
