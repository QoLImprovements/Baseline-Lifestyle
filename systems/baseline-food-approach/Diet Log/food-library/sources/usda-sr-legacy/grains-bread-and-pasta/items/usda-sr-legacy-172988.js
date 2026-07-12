/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-tbsp-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "2-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "2 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Wheat Germ, Regular",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 49.4,
    "energy_kcal": 1530.0,
    "fat_g": 9.56,
    "fibre_g": 11.9,
    "folate_ug": 669.0,
    "iron_mg": 8.34,
    "magnesium_mg": 313.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1130.0,
    "potassium_mg": 1100.0,
    "protein_g": 31.4,
    "salt_g": 0.015,
    "sat_fat_g": 1.66,
    "sodium_mg": 6.0,
    "sugar_g": 7.14,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 19.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172988",
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
