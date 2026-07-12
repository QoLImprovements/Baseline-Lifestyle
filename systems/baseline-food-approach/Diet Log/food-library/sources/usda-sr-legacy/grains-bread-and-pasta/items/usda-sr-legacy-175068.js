/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-saltines",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "3-saltines",
      "kind": "unit",
      "label": "3 saltines"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "6-saltines",
      "kind": "unit",
      "label": "6 saltines"
    }
  ],
  "name": "Crackers, saltines, fat-free, low-sodium",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 82.3,
    "energy_kcal": 1640.0,
    "fat_g": 1.6,
    "fibre_g": 2.7,
    "folate_ug": 124.0,
    "iron_mg": 7.72,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 115.0,
    "protein_g": 10.5,
    "salt_g": 2.1225,
    "sat_fat_g": 0.244,
    "sodium_mg": 849.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175068",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
