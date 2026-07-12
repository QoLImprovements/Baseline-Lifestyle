/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "0-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, 100% Natural Granola, Oats, Wheat and Honey",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 73.6,
    "energy_kcal": 421.0,
    "fat_g": 11.6,
    "fibre_g": 10.2,
    "folate_ug": 37.0,
    "iron_mg": 2.81,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 392.0,
    "potassium_mg": 483.0,
    "protein_g": 10.6,
    "salt_g": 0.125,
    "sat_fat_g": 1.24,
    "sodium_mg": 50.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173892",
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
