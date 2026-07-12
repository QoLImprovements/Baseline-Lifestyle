/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "jar-beech-nut-stage-3-6-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-beech-nut-stage-3-6-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 3 (6 oz)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    }
  ],
  "name": "Babyfood, fruit, applesauce with banana, junior",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.2,
    "energy_kcal": 276.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 131.0,
    "protein_g": 0.37,
    "salt_g": 0.0075,
    "sat_fat_g": 0.04,
    "sodium_mg": 3.0,
    "sugar_g": 4.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.3,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170951",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
