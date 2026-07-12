/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-beech-nut-stage-2-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, beef with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.36,
    "energy_kcal": 402.0,
    "fat_g": 6.93,
    "fibre_g": 1.8,
    "folate_ug": 11.0,
    "iron_mg": 0.33,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 127.0,
    "protein_g": 2.03,
    "salt_g": 0.095,
    "sat_fat_g": 2.84,
    "sodium_mg": 38.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 222.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172261",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
