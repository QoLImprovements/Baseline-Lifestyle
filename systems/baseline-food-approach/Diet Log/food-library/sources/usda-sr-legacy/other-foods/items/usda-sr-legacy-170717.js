/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "McDONALD'S, Hamburger",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 30.3,
    "energy_kcal": 264.0,
    "fat_g": 10.1,
    "fibre_g": 1.3,
    "folate_ug": 64.0,
    "iron_mg": 2.87,
    "magnesium_mg": 21.0,
    "omega3_g": 0.142,
    "phosphorus_mg": 107.0,
    "potassium_mg": 192.0,
    "protein_g": 12.9,
    "salt_g": 1.235,
    "sat_fat_g": 3.5,
    "sodium_mg": 494.0,
    "sugar_g": 6.03,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170717",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
